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

---

## Exercise: Step-by-Step Instructions

> **Read each step carefully.** We tell you exactly _where_ to do each thing — your VSCode terminal, the Supabase dashboard, a specific file, or Claude.

---

### Step 1: Clone the repository

> 📍 **Where:** Your VSCode terminal (`` Ctrl + ` `` to open it)

```bash
cd ~/Desktop
git clone https://github.com/LoisBN/fpp-todo-crud.git
cd fpp-todo-crud
code .
```

---

### Step 2: Install dependencies

> 📍 **Where:** Your VSCode terminal

```bash
npm install
```

Wait for it to finish (you'll see text scrolling — that's normal).

---

### Step 3: Set up your environment file

> 📍 **Where:** Your VSCode terminal

**On Mac/Linux:**
```bash
cp .env.example .env
```

**On Windows (Command Prompt):**
```bash
copy .env.example .env
```

**On Windows (PowerShell):**
```bash
Copy-Item .env.example .env
```

> 📍 **Where:** VSCode — open the `.env` file

Now you need to add your Supabase credentials. Open the `.env` file and replace the placeholder values:

```
VITE_SUPABASE_URL=https://YOUR-PROJECT-ID.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

> 💡 **Where do I find these?** Go to your Supabase dashboard → click your project → **Settings** (gear icon in sidebar) → **API**. Copy the "Project URL" and the "anon public" key.

---

### Step 4: Create the todos table in Supabase

> 📍 **Where:** Your browser — Supabase Dashboard → SQL Editor

Before the app can work, you need a `todos` table in your database. Go to your Supabase project, click **SQL Editor** in the sidebar, click **New Query**, and paste this:

```sql
CREATE TABLE todos (
  id bigint generated always as identity primary key,
  text text not null,
  completed boolean default false,
  created_at timestamptz default now()
);
```

Click **"Run"**. You should see a green success message.

> 📍 **Where:** Supabase Dashboard → Table Editor

Click **Table Editor** in the sidebar to verify — you should see the `todos` table with its columns.

> 💡 **What just happened?** You created a table called `todos` with 4 columns: an auto-generated `id`, the todo `text`, a `completed` checkbox (defaults to false), and a `created_at` timestamp.

---

### Step 5: Start the app

> 📍 **Where:** Your VSCode terminal

```bash
npm run dev
```

> 📍 **Where:** Your browser

Open [http://localhost:5173](http://localhost:5173). You should see the todo list page (it may be empty — that's expected since there are no todos yet).

> 💡 **Leave this tab open!** The page auto-refreshes as you edit code.

---

### Step 6: Build the CRUD features

Now comes the coding part! You'll be working in the file `app/routes/home.tsx`.

> 📍 **Where:** VSCode — open `app/routes/home.tsx`

Find this file in the sidebar: `app` → `routes` → `home.tsx`. Or press `Ctrl+P` (Windows) / `Cmd+P` (Mac) and type `home.tsx`.

This file has TODO comments showing you what to implement. Here's what each CRUD operation means:

| Operation | What it does | Supabase method |
|-----------|-------------|-----------------|
| **C**reate | Add a new todo | `.insert()` |
| **R**ead | Load all todos | `.select()` |
| **U**pdate | Toggle a todo's completed status | `.update()` |
| **D**elete | Remove a todo | `.delete()` |

> 💡 **Ask Claude for help!** Try: *"I need to write a function that fetches all todos from Supabase using the JavaScript client. The table is called 'todos'. Can you show me how?"*

---

### Step 7: Test your work

> 📍 **Where:** Your browser — [http://localhost:5173](http://localhost:5173)

As you implement each feature, test it in the browser:

1. **Add a todo** — Type something in the input and submit. Check that it appears in the list.
2. **Toggle a todo** — Click on a todo to mark it complete/incomplete.
3. **Delete a todo** — Click the delete button to remove it.

> 📍 **Where:** Supabase Dashboard → Table Editor → `todos` table

You can also verify by checking the `todos` table in Supabase — the data should match what you see in the browser!

---

### Step 8: Commit and push your work

> 📍 **Where:** Your VSCode terminal

Stop the dev server with `Ctrl+C`, then:

```bash
git add .
git commit -m "Implement todo CRUD operations"
git push
```

---

## Ask Claude for Help

If you get stuck at any point, try these prompts with Claude:

- **"How do I fetch data from a Supabase table called 'todos' using the JavaScript client?"**
- **"How do I insert a new row into Supabase from a React form?"**
- **"How do I update a single row in Supabase by its ID?"**
- **"How do I delete a row from Supabase?"**
- **"I'm getting this error: [paste error]. What's wrong?"**

---

## Project Structure

```
app/
├── routes/
│   └── home.tsx          ← ⭐ YOUR TODO LIST — edit this file!
└── lib/
    └── supabase.ts       ← Supabase client setup (no need to edit)
```

---

## Troubleshooting

**App shows a blank page or errors:**
- Make sure your `.env` file has the correct Supabase URL and anon key
- Make sure you created the `todos` table in Supabase (Step 4)
- Check the browser console (`F12` → Console tab) for error messages

**"relation 'todos' does not exist":**
- You haven't created the table yet — go back to Step 4

**Data doesn't show up after insert:**
- Make sure you call the fetch function again after inserting. The list won't auto-refresh unless you re-fetch.

**"npm install" fails:**
- Make sure you have Node.js version 18+ installed. Check with `node --version`

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
