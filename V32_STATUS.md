# V32 – produktiver Vergleichsrahmen

Neu:
- Backend-Cache für Angebotsabfragen
- einheitliches Ergebnisformat
- günstigster Treffer je Produkt
- beste Gesamtsumme
- Datenstatus + Quelle
- Frontend versucht zuerst das Backend und fällt sauber zurück
- keine Live-Behauptung für nicht angeschlossene Händler

Noch erforderlich für echten Händler-Livebetrieb:
1. Backend hosten.
2. Für REWE/Lidl/Kaufland/Denns jeweils zugelassene API/Feeds/Lizenzen beschaffen.
3. Provider implementieren und testen.
4. Backend-URL in der App setzen.

Demo-Fallbacks bleiben eindeutig als DEMO_FALLBACK markiert.
