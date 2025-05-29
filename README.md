[![CI Status](https://github.com/mayilss/finance-app/actions/workflows/ci.yml/badge.svg)](https://github.com/mayilss/finance-app/actions/workflows/ci.yml)
[![Lighthouse CI](https://github.com/mayilss/finance-app/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/mayilss/finance-app/actions/workflows/lighthouse.yml)

# Finance App 🔢💰

A minimal, money-management app built with React, TypeScript & Vite.  
Tracks daily expenses, debts, and shows aggregate spending/income over time.

---

## 🚀 Quick Start

### Prerequisites

- Node.js ≥18
- npm
- Git

### Installation

1. Clone this repo
   git clone https://github.com/mayilss/finance-app.git
   cd finance-app
2. Install dependencies
   npm install

### Available Scripts

| Command              | What it does                                   |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | Starts Vite dev server                         |
| `npm run build`      | Runs `tsc -b` then `vite build` for production |
| `npm run preview`    | Serves the production build locally            |
| `npm run lint`       | Runs ESLint across `src/`                      |
| `npm run type-check` | Runs `tsc --noEmit` to catch TS errors         |
| `npm run prepare`    | (Husky) Installs Git hooks on `npm install`    |
| `npm run test`       | Runs unit and integration test with `vitest`   |
| `npm run coverage`   | Runs Vitest with coverage report               |
| `npm run cy:open`    | Opens Cypress Test Runner (interactive)        |
| `npm run cy:run`     | Runs Cypress E2E tests in headless mode        |
| `npm run lhci`       | Runs Lighthouse CI                             |

### State Management

This project uses Redux Toolkit for state management, with two slices:

Transactions Slice (src/features/transactions/slice.ts):

Stores transactions as a Record<string, Transaction>.

Actions: addTransaction, removeTransaction.

Theme Slice (src/features/settings/theme/slice.ts):

Manages mode: 'light' | 'dark' | 'system'.

Actions: setTheme.

### Persistence

On every state change, the entire Redux state is debounced (300ms) and serialized to localStorage under the key state via:

// src/lib/persist.ts
saveState(store.getState());

At app startup, loadState() reads that key (if present) and uses it as the store’s preloadedState:

// src/app/store.ts
const preloadedState = loadState();
configureStore({ reducer, preloadedState });

Resetting State

To clear all persisted data and return to a fresh state:

Open your browser’s DevTools.

Go to Application (Chrome) or Storage (Firefox).

Under Local Storage, select the app’s domain.

Right-click the state entry and choose Delete (or click Clear).

Reload the app.
