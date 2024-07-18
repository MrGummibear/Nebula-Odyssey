# Gruppenprojekt: Nebula Odyssey

Arbeitsgruppe: Maik, Fabian, Marius

Zeitraum: 20.02.2024 - 27.02.2024, Praesentation am 28.02.2024

## Planung

Erstellen des Browsergames "Nebula Odyssey" mit HTML und CSS

- Blueprint der Webseite per Figma erstellen
- Einteilung der Arbeitsbereiche mit Trello ( https://trello.com/b/YbooLxwc/first-steps )
- Visualisierung der Grundstruktur auf dem Miro-Board ( https://miro.com/app/board/uXjVN0L766Y=/ )

Benötigte Seiten HTML/CSS

- (Login-Page)
- Home Landing-Page (erste Seite nach dem Login) / _21.02.2024 MW_
- Übersicht
- Raumkarte
- Forschung
- Armada
- Zivilgebaeude
- Militaergebaeude

_erstellt 19.02.2024, Marius Weber_

## Log

_21.02.2024 MW:_

- aendern der Grundstruktur: Section 3 enthaelt nun ein Grid-System, um spaeter damit flexibler arbeiten zu können.
- Verschieben der Grundstruktur in den Ordner Gruppenprojekt (
  Zeitraum: 20.02.2024 - 27.02.2024)

_22.02.2024 MW:_

- Festlegung folgender Breakpoints:

1. Standard-Design: 1920x1080 (Funktionierendes Spiel)
2. Breakpoint 1 : 1440x900 (siehe Standard-Design)
3. Breakpoint 2 : <1440x900 (Nur Ressourcenübersicht, Benachrichtigungen)
4. Iphone SE : siehe Breakpoint 2

_26.02.2024 MW:_

- Festlegung der Standardfont "Inconsolata"
- Hauptmenü-Buttons mit festgelegtem Effekt und styling, folgender Code muss für
  jede Unterseite verwendet werden:

```
uebersicht{
 --background-color: #8d867b;
 --border-color: linear-gradient(to bottom right, #0e1b24, #72203b);
 color: #0e1b24;
}
```

_27.02.2024 MW:_

### **Wichtig!**

**Die home.css muss immer zuerst in den .html-Dateien eingebunden werden, damit das Hauptstyling der Seite zuerst geladen wird. Ansonsten funktionieren resets (wie z.B. der Button-reset für den uebersicht-button) nicht!**
