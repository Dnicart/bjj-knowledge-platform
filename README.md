# BJJ Knowledge Platform

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SSR](https://img.shields.io/badge/SSR-Prerendering-512BD4)](https://angular.dev/guide/ssr)
[![Vitest](https://img.shields.io/badge/Tests-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)

An educational Brazilian Jiu-Jitsu web app for beginners — built as a portfolio project to demonstrate modern Angular architecture, accessibility-minded UI, and static-first content design.

**Live demo:** _Coming soon_

## Highlights

- **12 beginner techniques** with step-by-step instructions, safety notes, and related techniques
- **Searchable technique library** with category, difficulty, and gi/no-gi filters
- **Interactive position explorer** with keyboard-accessible controls
- **Learning path & quiz** with client-side progress persistence
- **Educational content:** history, belts, rules (IBJJF-cited), glossary, and articles
- **SSR + prerendering** for fast load times and SEO-friendly static pages

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Angular 22 (standalone components, Signals) |
| Language | TypeScript (strict mode) |
| Styling | SCSS with design tokens |
| Routing | Angular Router with lazy-loaded features |
| Rendering | Angular SSR + prerendering (`@angular/ssr`) |
| Testing | Vitest |
| Data (v1) | Typed static TypeScript content |
| Planned | NestJS + PostgreSQL API |

## Architecture

```
client/src/app/
├── core/       # Models, services, repositories
├── shared/     # Reusable UI components
├── layout/     # Header, footer, navigation shell
├── features/   # Route-level pages (techniques, quiz, etc.)
└── data/       # Static content records
```

Design choices worth noting for reviewers:

- **Repository pattern** abstracts data access for a future API swap
- **Signals** for filters, favorites, and learning-path state
- **SSR-safe storage** guards `localStorage` during server rendering
- **Feature-based structure** keeps routes, pages, and content organized

## Quick start

```bash
cd client
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build & deploy

```bash
cd client
npm run build          # Production build with prerendering
npm run serve:ssr:client   # Serve SSR output locally
npm test               # Run unit tests
```

## Screenshots

_Add 2–4 screenshots here (home, technique library, learning path, quiz) once deployed._

## Roadmap

- [ ] Deploy live demo (GitHub Pages, Vercel, or Azure Static Web Apps)
- [ ] Add CI workflow (build + test on pull request)
- [ ] NestJS + PostgreSQL backend
- [ ] Expanded article library and user accounts

## License & disclaimers

Educational content only — not medical advice. Always train under qualified instruction. Belt promotion timelines vary by academy.

See [client/README.md](client/README.md) for detailed developer documentation.
