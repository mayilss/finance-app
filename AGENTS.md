# Contributor Guidelines

This project is a React + TypeScript web application built with Vite. The
repository contains unit tests written with Vitest and end-to-end tests using
Cypress. Follow the steps and style rules below when modifying any files.

## Setup

1. Use **Node 18+**.
2. Install dependencies with `npm install` (or `npm ci` for a clean install).

## Development tasks

Before committing changes:

1. **Lint** the code:
   ```bash
   npm run lint
   ```
2. **Type-check** the code:
   ```bash
   npm run type-check
   ```
3. **Run unit tests** with Vitest:
   ```bash
   npm run test
   ```
4. If your change affects coverage or E2E behaviour, also run:
   ```bash
   npm run coverage      # unit test coverage
   npm run cy:run        # Cypress E2E tests (requires dev server)
   ```
   Start the dev server using `npm run dev` and wait for `http://localhost:5173` before running Cypress.

## Code style

- Formatting is enforced by Prettier. Use double quotes and keep semicolons.
- Import modules using the path aliases defined in `tsconfig.app.json`
  (e.g. `@features/...`, `@components/...`).
- Write React components as named functions (`function MyComponent() { ... }`).
- Add or update unit tests when modifying logic. Place Vitest tests under the
  corresponding `__tests__` folder.

## Commit rules

- Keep commits focused and descriptive.
- Do **not** commit build artifacts or `node_modules`.
- If you add dependencies, update `package-lock.json` accordingly.

## Project layout overview

- `src/` – application source code
- `cypress/` – Cypress tests and support files
- `public/` – static assets served by Vite
- `vite.config.ts` – Vite and Vitest configuration
- `.github/workflows/` – CI configuration (runs lint, type-check, tests, Cypress and coverage)

Follow these guidelines to ensure CI passes and code remains consistent.
