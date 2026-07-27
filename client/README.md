# Ground Game Guide

Educational Brazilian Jiu-Jitsu website for beginners. Learn positions, techniques, terminology, rules, and more.

## Stack

- Angular 22 with standalone components and Signals
- TypeScript (strict mode)
- SCSS
- Angular SSR with prerendering
- Vitest for unit tests
- Static TypeScript data (NestJS + PostgreSQL planned for a future phase)

## Prerequisites

- Node.js 20+
- npm 12+

## Setup

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build

```bash
npm run build
```

Production output is in `dist/client/`.

## SSR

```bash
npm run serve:ssr:client
```

## Tests

```bash
npm test
```

## Project structure

```
src/app/
├── core/           # Models, services, repositories, utils
├── shared/         # Reusable components
├── layout/         # Header, footer, main layout
├── features/       # Route-level feature pages
└── data/           # Static content (techniques, glossary, etc.)
```

## Content guidelines

- No unsupported medical claims
- Belt promotion timelines are not guarantees
- Competition rules cite ruleset and review date
- Original technique descriptions only

## Roadmap

- NestJS API with PostgreSQL
- Expanded article library
- User accounts and cloud-synced favorites

## Disclaimers

This site is for educational purposes only. Always train under qualified instruction at a certified academy.
