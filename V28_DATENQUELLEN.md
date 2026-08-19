# V28 – Datenquellenstrategie

## Verifizierte technische Möglichkeiten

- REWE: Der Shop weist ausdrücklich darauf hin, dass konkrete Preise vom Standort abhängen; daher ist PLZ/Markt-Auswahl Teil des Datenmodells.
- ALDI SÜD: Offizielle Angebotsseite und eine Verfügbarkeitsabfrage für unterstützte Filialen.
- Lidl: Offizielle Aktionsprospekte und regionale Filialangebote.
- Kaufland: Offizielle Filial-/Angebotsseiten.
- Denns BioMarkt: offizielle Website als Quelle; strukturierter Live-Feed ist noch nicht öffentlich verifiziert.
- kaufDA: standortbezogene Prospekte und Angebote; für automatisierte produktive Nutzung muss eine zulässige Schnittstelle/Lizenz bzw. Nutzungsfreigabe geklärt werden.

## Architektur

Die GitHub-Pages-App darf nicht so tun, als hätte sie direkten Zugriff auf private Händler-APIs.
Stattdessen:
1. App sendet PLZ + Produktliste an ein eigenes Backend.
2. Backend ruft nur zulässige/vereinbarte Quellen ab.
3. Backend normalisiert Produktname, Packungsgröße, Preis, Grundpreis, Zeitraum und Markt.
4. App bekommt nur verifizierte Ergebnisse mit Quelle und Aktualitätsstatus.

## Datenstatus

- LIVE: direkt aus zugelassener Quelle bestätigt
- PROSPEKT: aus aktuellem Prospekt
- STANDORTABHÄNGIG: Händlerpreis hängt von Markt/PLZ ab
- NICHT VERFÜGBAR: kein verlässlicher Preis gefunden

Keine erfundenen Preise als Live kennzeichnen.
