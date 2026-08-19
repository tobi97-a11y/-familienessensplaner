# FamilienEssensPlaner V29 Backend

Dieses Backend ist die Grundlage für den echten Angebotsvergleich.

## Start

```bash
npm install
npm start
```

Danach:
- `GET /api/health`
- `GET /api/providers`
- `POST /api/compare`

Beispiel:

```json
{
  "zip": "99817",
  "products": ["Milch", "Eier", "Tomaten"]
}
```

## Wichtig

Der enthaltene Provider ist ausdrücklich als `DEMO` gekennzeichnet.
Er behauptet keine Live-Händlerpreise.

Für produktive Live-Daten wird je Händler ein zulässiger offizieller
Datenfeed/API oder eine ausdrücklich erlaubte Aggregator-Schnittstelle
als Provider implementiert.

Die Provider-Schnittstelle ist absichtlich getrennt, damit REWE,
ALDI SÜD, Lidl, Kaufland, Denns BioMarkt und weitere Quellen einzeln
angeschlossen werden können.
