import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Provider interface.
// Only add a provider here when its data source/API is permitted for automated use.
const providers = [
  {
    id: "demo",
    name: "Demo-Daten",
    status: "demo",
    async search({ product }) {
      const demo = {
        milch: [["ALDI SÜD", 1.09], ["Lidl", 1.15], ["REWE", 1.19], ["Kaufland", 1.12], ["Denns BioMarkt", 1.49], ["EDEKA", 1.19]],
        eier: [["ALDI SÜD", 2.29], ["Lidl", 2.39], ["Kaufland", 2.35], ["REWE", 2.49], ["EDEKA", 2.49], ["Denns BioMarkt", 3.19]],
        tomaten: [["Kaufland", 1.39], ["Lidl", 1.49], ["ALDI SÜD", 1.59], ["EDEKA", 1.69], ["REWE", 1.79], ["Denns BioMarkt", 1.99]],
        pasta: [["Lidl", 1.19], ["Kaufland", 1.39], ["ALDI SÜD", 1.45], ["REWE", 1.49], ["EDEKA", 1.49], ["Denns BioMarkt", 1.79]]
      };
      const key = Object.keys(demo).find(k => product.toLowerCase().includes(k)) || "milch";
      return demo[key].map(([market, price]) => ({
        product,
        market,
        price,
        currency: "EUR",
        packSize: null,
        unitPrice: null,
        validFrom: null,
        validTo: null,
        status: "DEMO",
        source: "Demo-Daten"
      }));
    }
  }
];

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "FamilienEssensPlaner", version: "V29", time: new Date().toISOString() });
});

app.get("/api/providers", (_req, res) => {
  res.json(providers.map(p => ({ id: p.id, name: p.name, status: p.status })));
});

app.post("/api/compare", async (req, res) => {
  const { zip = "", location = "", products = [] } = req.body || {};
  if (!zip && !location) return res.status(400).json({ error: "PLZ oder Ort erforderlich." });
  if (!Array.isArray(products) || !products.length) return res.status(400).json({ error: "Mindestens ein Produkt erforderlich." });

  const results = [];
  for (const product of products) {
    for (const provider of providers) {
      const rows = await provider.search({ zip, location, product });
      results.push(...rows);
    }
  }

  res.json({
    ok: true,
    location: { zip, location },
    generatedAt: new Date().toISOString(),
    live: results.some(r => r.status === "LIVE"),
    results
  });
});

app.listen(PORT, () => {
  console.log(`FamilienEssensPlaner V29 Backend läuft auf Port ${PORT}`);
});
