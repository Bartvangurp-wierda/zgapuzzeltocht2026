# Nimma Ending Story

Een GPS-puzzeltocht PWA gebouwd als cadeau voor een stel dat 20 jaar samen is. Ze worden via een kompas-pijl langs persoonlijke locaties geleid en moeten per stop een raadsel oplossen.

Deployment gaat automatisch via GitHub Actions bij een push naar `main`. Live op: [https://rachid-o.github.io/nimmaendingstory/](https://rachid-o.github.io/nimmaendingstory/)

## NPM installeren

Als je Node.js en npm nog niet op je computer hebt, volg dan deze stappen:

1. Download Node.js vanaf: https://nodejs.org/
2. Kies de LTS-versie (aanbevolen voor de meeste mensen).
3. Start de installer en volg de aanwijzingen.
4. Herstart je computer na de installatie.
5. Controleer of npm werkt in een terminal:

```bash
npm --version
```

Als je een versienummer ziet, is npm correct geïnstalleerd.

## Project starten

Na de installatie ga je naar de projectmap en voer je uit:

```bash
npm install
npm run dev
```

Dan opent de app lokaal in je browser. In de terminal staat meestal een lokale URL zoals `http://localhost:5173`.

## Extra: probleemoplossing

- Als je een foutmelding krijgt over `npm` niet gevonden, controleer dan of Node.js goed is geïnstalleerd.
- Als de app niet start, controleer of je in de juiste map zit en of `npm install` zonder fouten is uitgevoerd.
- Als je de app wilt stoppen, druk je op `Ctrl + C` in de terminal.
