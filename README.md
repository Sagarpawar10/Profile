# Creative Profile (Express + Middleware)

A minimal, modern personal profile website built with **Node.js**, **Express**, and **EJS**, showcasing **middleware** usage. Includes at least **three pages**: Home, About, Projects, and also a Contact page.

## Features
- Application-level middleware:
  - `requestLogger` logs method, URL, status and response time.
  - `injectProfile` loads `profile.json` and exposes it to all EJS templates via `res.locals.profile`.
- Modular routes & clean folder structure.
- Static assets served from `/static`.
- 404 handler.

## Getting Started
```bash
npm install
npm run start
# Open http://localhost:3000
```

## Dev mode with auto-reload
```bash
npm run dev
```

## Customize
- Update **profile.json** with your details, skills and projects.
- Edit styles in **public/css/style.css**.
- Add/modify pages in **views/pages** and routes in **routes/index.js**.

---
Made with ❤️ using Express.
