# V29 – Backend

## Was neu ist

Die App hat jetzt eine separate Backend-Struktur:

`GitHub Pages App → /api/compare → Provider → Händler-/Aggregator-Daten`

Das Backend:
- nimmt PLZ/Ort und Produktliste entgegen
- normalisiert die Antwort in ein einheitliches Format
- kennt Datenstatus (`LIVE`, `PROSPEKT`, `STANDORTABHÄNGIG`, `DEMO`)
- kann Händler einzeln als Provider anbinden

## Noch nicht live

Das mitgelieferte Backend nutzt absichtlich nur DEMO-Daten.
Damit werden keine Händlerpreise erfunden oder unerlaubt aus Webseiten
abgegriffen.

Für echte Preise müssen wir die jeweils erlaubte API/Datenquelle
bekommen und anschließend den entsprechenden Provider aktivieren.

## Deployment

Das Backend kann z. B. auf einem Node-kompatiblen Hosting betrieben
werden. Danach wird in `index.html` die Variable

`window.FEP_BACKEND_URL`

auf die Backend-Adresse gesetzt.

## Sicherheit

API-Schlüssel gehören ausschließlich ins Backend/Environment und niemals
in `index.html` oder GitHub Pages.
