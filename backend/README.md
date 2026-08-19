# V30 Backend

V30 enthält den ersten echten Provider auf Basis einer offiziellen öffentlichen ALDI-SÜD-Angebotsseite.

## Start
npm install
npm start

## API
GET /api/health
GET /api/providers
POST /api/compare

Beispiel:
{"zip":"99817","products":["Milch","Eier"]}

## Datenstatus
OFFICIAL_SOURCE_UNPARSED_MARKUP = Daten wurden von der offiziellen öffentlichen Angebotsseite abgerufen, aber die HTML-Struktur muss vor einem produktiven Preisversprechen stabil verifiziert werden.
DEMO = Fallback-Daten, niemals als Live kennzeichnen.

## Wichtig
Die Seite kann ihr HTML/Markup jederzeit ändern. Für einen robusten produktiven Dienst sollte ein offizieller Feed/API oder eine ausdrücklich erlaubte Schnittstelle verwendet werden.
