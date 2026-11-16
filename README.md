# OMJ — Developer Portfolio

A responsive full-stack developer portfolio built with React, JavaScript, CSS, Framer Motion, Express and MongoDB.

## Features

- Responsive hero, about, skills, projects, experience, education and contact sections.
- Mobile navigation menu and active-section indicator.
- Reusable React components and Framer Motion transitions.
- Project filtering and locally stored portfolio fallback data.
- Express contact API with input validation and basic request throttling.
- MongoDB persistence for portfolio data and contact messages.
- Clear fallback behaviour when MongoDB is not connected.
- Keyboard focus styles, skip navigation link and reduced-motion-aware custom cursor.

## Project structure

- `src/components/` — React UI components and section styles.
- `src/data/` — Portfolio, skills, experience, education and project content.
- `src/hooks/` — Custom cursor and portfolio-data hooks.
- `src/animations/` — Shared Framer Motion variants.
- `src/styles/` — Global styles and design tokens.
- `public/images/` — Portfolio photographs and project previews.
- `server/` — Express API, MongoDB connection, routes and models.

## Requirements

- Node.js 20 or later.
- npm.
- MongoDB local instance or MongoDB Atlas (optional for frontend preview; required for persistent contact messages and database-managed portfolio content).

## Run locally

1. Open the project folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Optional: copy `.env.example` to `.env` and set `MONGODB_URI`.
4. Start the API in one terminal:

   ```bash
   npm run server
   ```

5. Start the React app in a second terminal:

   ```bash
   npm run dev
   ```

6. Open the local URL printed by Vite (normally `http://localhost:5173`).

The frontend can display its local portfolio data when the API or MongoDB is unavailable. The contact API refuses to report success unless it can save the message to MongoDB; if the database is offline, the form directs visitors to email instead.

## MongoDB seed

With MongoDB running and `.env` configured, run:

```bash
npm run seed
```

The seed command replaces the portfolio project and skill collections with the current data from `src/data/`.

## Production build

```bash
npm run build
npm run preview
```

## Before publishing

- Confirm every project description and skill level is accurate.
- Replace or add project repository links where they are available.
- Configure a production MongoDB connection and secure environment variables.
- Add a real CV file only when it is ready to be shared.
- Test the site on a phone, tablet and desktop browser.
