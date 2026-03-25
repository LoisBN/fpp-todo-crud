# Todo List CRUD — Supabase Practice

Build a todo app with full CRUD operations against Supabase. Create, read, update, and delete todos that persist across page refreshes.

## Quick Start

**1. Fork this repo** — Click the **Fork** button at the top right of this page.

**2. Clone your fork:**
```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/fpp-todo-crud.git
cd fpp-todo-crud
npm install
```

Create a `.env` file:
```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Find your credentials in Supabase Dashboard → Settings → API.

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Exercise Instructions

This repo is part of the **From Prompt to Production** course.

👉 **[Find the full exercise instructions on the course platform](https://aicode-academy.com)**

## Tech Stack

- React Router v7 (framework mode)
- Supabase (database)
- Tailwind CSS v4
- TypeScript

## Project Structure

```
app/
├── lib/              ← Supabase client (pre-configured)
├── routes/           ← ⭐ Your CRUD logic goes here
├── root.tsx          ← App shell
└── routes.ts         ← Route definitions
```

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
