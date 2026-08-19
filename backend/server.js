import express from "express";
import cors from "cors";
const app=express(); app.use(cors()); app.use(express.json());
const PORT=process.env.PORT||3000;
const SOURCES={
 "ALDI SÜD":{url:"https://www.aldi-sued.de/angebote",status:"OFFICIAL_PUBLIC"},
 "REWE":{url:"https://www.rewe.de/shop/c/milch/",status:"OFFICIAL_PUBLIC_LOCATION_DEPENDENT"},
 "Lidl":{url:"https://www.lidl.de/c/online-prospekte/s10005610/",status:"OFFICIAL_PUBLIC_PROSPECT"},
 "Kaufland":{url:"https://filiale.kaufland.de/angebote.html",status:"OFFICIAL_PUBLIC_PROSPECT"},
 "Denns BioMarkt":{url:"https://www.denns-biomarkt.de/",status:"OFFICIAL_PUBLIC"},
 "kaufDA":{url:"https://www.kaufda.de/",status:"AGGREGATOR_REQUIRES_PERMISSION"}
};
const CACHE=new Map(), TTL=10*60*1000;
const norm=s=>String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
function demoRows(product){
 const d={milch:[["ALDI SÜD",1.09],["Lidl",1.15],["Kaufland",1.12],["REWE",1.19],["EDEKA",1.19],["Denns BioMarkt",1.49]],eier:[["ALDI SÜD",2.29],["Lidl",2.39],["Kaufland",2.35],["REWE",2.49],["EDEKA",2.49],["Denns BioMarkt",3.19]],tomaten:[["Kaufland",1.39],["Lidl",1.49],["ALDI SÜD",1.59],["EDEKA",1.69],["REWE",1.79],["Denns BioMarkt",1.99]],pasta:[["Lidl",1.19],["Kaufland",1.39],["ALDI SÜD",1.45],["REWE",1.49],["EDEKA",1.49],["Denns BioMarkt",1.79]]};
 const k=Object.keys(d).find(k=>norm(product).includes(k)); return k?d[k].map(([market,price])=>({product,market,price,currency:"EUR",packSize:null,unitPrice:null,status:"DEMO_FALLBACK",source:SOURCES[market]?.url||null})):[]; 
}
async function aldi(product){
 const r=await fetch(SOURCES["ALDI SÜD"].url,{headers:{"User-Agent":"FamilienEssensPlaner/32"}});
 if(!r.ok) throw new Error("ALDI HTTP "+r.status);
 const t=await r.text(),n=norm(product),rx=/([^<>]{0,220}?)(\d{1,3}[.,]\d{2})\s*€\b/g,out=[];let m;
 while((m=rx.exec(t))&&out.length<10){const label=m[1].replace(/\s+/g," ").trim(),price=Number(m[2].replace(".","").replace(",","."));
  if(Number.isFinite(price)&&(!n||norm(label).includes(n)))out.push({product,market:"ALDI SÜD",price,currency:"EUR",packSize:null,unitPrice:null,status:"OFFICIAL_PUBLIC_UNPARSED",source:SOURCES["ALDI SÜD"].url});
 } return out;
}
async function provider(product){const key="aldi:"+norm(product),c=CACHE.get(key);if(c&&Date.now()-c.time<TTL)return c.rows;
 let rows=[];try{rows=await aldi(product)}catch{} if(!rows.length)rows=demoRows(product);
 CACHE.set(key,{time:Date.now(),rows});return rows;
}
app.get("/api/health",(_q,r)=>r.json({ok:true,version:"V32",cacheTtlSeconds:TTL/1000,time:new Date().toISOString()}));
app.get("/api/sources",(_q,r)=>r.json(SOURCES));
app.post("/api/compare",async(req,res)=>{
 const {zip="",location="",products=[]}=req.body||{};if(!zip&&!location)return res.status(400).json({error:"PLZ oder Ort erforderlich."});
 if(!Array.isArray(products)||!products.length)return res.status(400).json({error:"Mindestens ein Produkt erforderlich."});
 const items=[];for(const p of products){const rows=await provider(p);const valid=rows.filter(x=>Number.isFinite(x.price)).sort((a,b)=>a.price-b.price);items.push({product:p,best:valid[0]||null,offers:valid})}
 const total=items.reduce((a,i)=>a+(i.best?.price||0),0);
 res.json({ok:true,location:{zip,location},generatedAt:new Date().toISOString(),items,totalBest:total,currency:"EUR",sources:SOURCES});
});
app.listen(PORT,()=>console.log("V32 Backend auf "+PORT));
