# FamilienEssensPlaner – Complete V5

Diese Version bündelt die gewünschten Verbesserungen in einer mobilen PWA:

- professionelle Startseite
- automatische „Günstige Woche planen“-Funktion
- Familiengröße + Budget
- Vegan / Vegetarisch / Alle
- maximale Kochzeit
- Priorität: günstig, schnell, Meal Prep, kinderfreundlich
- Ausschlüsse / Kinder mögen nicht
- Vorratskammer
- Wochenplan
- Rezeptbibliothek
- Favoriten
- Rezeptdetailseiten
- Meal-Prep- und Einfrier-Kennzeichnung
- Angebote je Händler (Demo-Daten)
- offizielle Angebotslinks
- automatische Einkaufsliste
- Sortierung nach Warengruppen
- Vorräte werden von der Einkaufsliste abgezogen
- Checkboxen + Fortschrittsanzeige
- Budget- und Kostenschätzung
- lokale Speicherung im Browser

## Veröffentlichung
Die Datei `index.html` und `manifest.webmanifest` können direkt in dein GitHub-Pages-Repository hochgeladen werden.

## Wichtig
Die Live-Angebotsautomatisierung ist als Produktfunktion vorgesehen, aber die enthaltenen Angebotsdaten sind Demo-Daten. Für echte Live-Angebote müssen zulässige APIs/Feeds oder andere freigegebene Datenquellen pro Händler angeschlossen werden.


## V6 Premium-Erweiterungen
- lokale Rezeptbilder für alle Gerichte
- Bilder in Rezeptkarten und Rezeptdetails
- Überrasche-mich-Funktion
- Reste-verwerten-Funktion
- Letzte-Woche-Aktion
- Supermarkt-Modus
- Wochenrückblick
- Angebotsalarm-Platzhalter für spätere Live-Anbindung

## V7 Smart Planner
- Smart Planner mit Zielen: ausgewogen, maximal sparen, Vorräte zuerst, maximale Abwechslung
- Berücksichtigung von Budget, Vorräten, Zutaten-Wiederverwendung und Profil
- Smart-Plan-Analyse mit Kosten, Budgetrest, Vorratsnutzung und Zutatenanzahl
- Familienbewertungen für Rezepte
- Wiederherstellung des vorherigen Wochenplans
- Angebot → passendes Rezept
- Budgetwarnung


## V8 Rezept-Fix
- Rezeptbibliothek zeigt wieder alle 12 Gerichte direkt
- Suchfeld und Filter funktionieren unabhängig von Profilfiltern
- „Alle Rezepte anzeigen“-Reset
- Rezeptanzahl sichtbar
- Rezeptbilder direkt aus dem GitHub-Hauptverzeichnis
- größere Rezeptkarten und „Rezept öffnen“-Button


## V9 Rezeptbilder
- 12 appetitliche Rezeptfotos passend zu den Rezeptkarten
- Bilder werden direkt aus `images/*.jpg` geladen
- Rezeptübersicht und Rezeptdetails verwenden dieselben Fotos


## V10 – 20 Familienrezepte
- 8 neue Rezepte: Rotes Linsen-Dal, Veggie-Burger, Zucchini-Nudeln, Süßkartoffel-Curry, Quinoa-Salat, Gemüseauflauf, Lachs mit Brokkoli, Schoko-Chia-Pudding
- 20 Rezepte insgesamt
- neue Rezeptbilder als JPG direkt im Hauptverzeichnis, passend zur bestehenden GitHub-Struktur
- Smart Planner kann die neuen Rezepte automatisch berücksichtigen


## V11 – Denns BioMarkt
- eigener Bereich „Denns Bio Angebote“
- Markt-/Stadteingabe
- Verknüpfung zur offiziellen BioMarkt/Denns-Marktsuche
- Angebote werden nicht erfunden oder mit veralteten Preisen fest eingebaut


## V12 – Smart Sparplaner
- neuer Bereich „Vom Angebot zum Familienessen“
- Angebotsartikel eingeben und passende Rezepte finden
- Verknüpfung mit offiziellen Denns/BioMarkt-Angeboten
- Markt- und zeitraumabhängige Angebote werden nicht als feste Preise in der App gespeichert
- passende Rezepte können geöffnet und anschließend in den Wochenplan/Einkauf übernommen werden


## V13 – Denns sichtbar
- Denns Bio Angebote direkt auf der Startseite
- großer „Angebote öffnen“-Button
- direkter offizieller Angebotslink: biomarkt.de/angebote
- Marktsuche bei Eingabe einer Stadt/PLZ


## V14 – Markt im Familienprofil
- Lieblingsmarkt direkt im Familienprofil auswählbar
- Denns BioMarkt als Standardoption
- PLZ/Ort speichern
- gespeicherter Markt wird beim Öffnen der Angebote verwendet
- weitere Händler: REWE, Lidl, ALDI, Kaufland


## V15 – Denns direkt im Supermarkt-Feld
- Denns BioMarkt erscheint jetzt direkt im vorhandenen Supermarkt-Auswahlfeld
- Denns BioMarkt ist die erste Auswahl
- Standardmarkt des Planers auf Denns BioMarkt gesetzt
- Lieblingsmarkt im Familienprofil bleibt zusätzlich gespeichert


## V16 – Live-Denns-Angebote
- eigener Live-Angebotsbereich in der App
- offizielle BioMarkt/Denns-Angebotsseite wird direkt eingebettet
- Aktualisieren-Button
- Fallback zum Öffnen der offiziellen Seite, falls der Browser eine Einbettung blockiert
- ausgewählter Markt aus dem Familienprofil wird angezeigt


## V17 – Denns Live-Angebote Fix
- leere Live-Fläche entfernt
- offizieller Denns/BioMarkt-Angebotsbereich wird zuverlässig in einem neuen Tab geöffnet
- ausgewählter Markt aus dem Familienprofil wird angezeigt
- klare Erklärung, warum die externe Seite nicht in einem iframe angezeigt wird


## V19 – Smart-Angebotsvergleich
- PLZ/Ort-Eingabe direkt im Angebote-Bereich
- optionales Produktfeld
- Vergleich für REWE, Lidl, ALDI SÜD, Kaufland und Denns BioMarkt
- offizielle Angebotsquellen pro Markt
- keine erfundenen Live-Preise: markt- und aktionsabhängige Preise werden nur als verifiziert angezeigt
- PLZ und Produkt für spätere Vergleiche gespeichert


## V20 – Live-Angebotsvergleich
- PLZ/Ort als Startpunkt
- Produkt-Suche
- offizielle Angebotsquellen von REWE, Lidl, ALDI SÜD, Kaufland und Denns
- keine erfundenen Preise
- Vergleich berücksichtigt Markt, Zeitraum, Packungsgröße und Grundpreis
- Ergebnis zeigt die verifizierbaren Angebotsquellen und führt direkt zur jeweiligen aktuellen Angebotsseite


## V21 – Angebotsvergleich stabilisiert
- Vergleichsbutton mit echter Event-Verknüpfung statt nur Inline-Handler
- Buttons sind `type=button` und können kein Formular versehentlich absenden
- Fehlermeldung bei fehlender PLZ/Ort
- PLZ und Produkt werden separat gespeichert
- Ergebnis-Karten sind direkt anklickbar
- kompatibel mit bereits geöffneten/zwischengespeicherten Versionen
