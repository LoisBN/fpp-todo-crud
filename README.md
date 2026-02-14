# Todo List — CRUD Operations with Supabase

Build a full CRUD todo list connected to Supabase to master Create, Read, Update, and Delete database operations.

## What You'll Learn
- Supabase client queries (select, insert, update, delete)
- useState for managing data state
- useEffect for loading data on mount
- Error handling for database operations
- Conditional rendering with form state

## Tech Stack
- **React Router v7** (framework mode) — pages and routing
- **Supabase** — database and auth
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript

## Getting Started

```bash
# 1. Clone this repo
git clone https://github.com/LoisBN/fpp-todo-crud.git
cd fpp-todo-crud

# 2. Install dependencies
npm install

# 3. Copy the environment file
cp .env.example .env
# Add your Supabase URL and anon key to .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Project Structure

```
fpp-todo-crud/
├── app/
│   ├── routes/
│   │   └── home.tsx          # Todo list page with form
│   └── lib/
│       └── supabase.ts       # Supabase client setup
├── .env.example
├── package.json
└── README.md
```

## Exercise Tasks

1. **Create todos table** — Set up the table in Supabase with proper columns
2. **Fetch and display todos** — Load todos on page mount and render them
3. **Add new todos** — Implement form submission to insert new todos
4. **Toggle completion** — Update todo status when clicked
5. **Delete todos** — Remove todos from the database

## Hints

- Table needs these columns:
  - `id` (int8, primary key)
  - `text` (text)
  - `completed` (boolean, default: false)
  - `created_at` (timestamptz)
- Use `.select()`, `.insert()`, `.update()`, `.delete()` from the Supabase client
- Wrap database calls in try/catch for error handling
- Call the fetch function again after insert/update/delete to refresh the list

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
