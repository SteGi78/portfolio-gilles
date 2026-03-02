# PortfolioGilles https://stegi78.github.io/portfolio-gilles/

Angular-Portfolio von Stephan Gilles.

## Stack
- Angular 17
- TypeScript
- SCSS
- Responsive UI
- GitHub Pages

## Lokal starten
```bash
npm ci
npm start
```

## Wichtige Befehle
```bash
npm start
npm run build
npm run build:github
```

- `npm run build` erstellt den normalen Production-Build.
- `npm run build:github` erstellt den GitHub-Pages-Build mit korrektem Base-Href für **PortfolioGilles**.

## GitHub-Upload
1. Repository-Name exakt: **PortfolioGilles**
2. Inhalt dieses Ordners ins Repo hochladen
3. In GitHub unter **Settings → Pages** als Quelle **GitHub Actions** verwenden
4. Push auf `main` startet das automatische Deployment

## Saubere Repo-Struktur
- kein `node_modules`
- kein Angular-Cache
- kein `dist`
- GitHub-Pages-Workflow bereits enthalten
- SPA-Fallback über `src/404.html` vorbereitet
