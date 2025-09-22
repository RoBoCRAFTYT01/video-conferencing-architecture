# 📂 src Directory – Project Source Code
Welcome to the heart of the project! This folder contains all the source code that powers the application 🚀.
Everything related to the app’s logic, UI, and configuration lives here.

## 📁 Folder Structure

```bash
src/
 ├── app/          # Next.js App Router (pages, layouts, routes)
 ├── lib/          # Utility functions, helpers, services
 ├── components/   # Shared React components (UI, buttons, cards, etc.)
 ├── styles/       # Global styles (Tailwind, SASS, or CSS modules)
 ├── hooks/        # Custom React hooks
 ├── types/        # TypeScript type definitions and interfaces
 ├── config/       # Project configuration (API endpoints, constants)
 └── assets/       # Static assets (images, svgs, fonts)
```

## ⚙️ Development Guide

### 1. Start the dev server
```bash
bun dev
#or
npm run dev
```

- App will run on http://localhost:3000 🎉

### 2. Add new routes
- Create a folder inside src/app/ → example: src/app/docs/page.tsx
- Next.js will automatically create /docs route.

### 3. Add new components
- Place inside src/components/
- Import them wherever needed.

### 4. Utilities
- Place helper functions inside src/lib/.
- Example: fetchMarkdown.ts for fetching GitHub markdown files.

## 🌟 Notes
- `app/` is mandatory → Next.js won’t run without it.
- If you want docs to auto-load from GitHub, check the logic inside `lib/github.ts`.
- Keep config files (`package.json`, `tsconfig.json`, `tailwind.config.ts`) outside `src/` so build tools can find them.