export default function Home() {
  // TODO: Add state for todos array and new todo input
  // TODO: Fetch todos from Supabase on component mount
  // TODO: Implement addTodo function
  // TODO: Implement toggleTodo function
  // TODO: Implement deleteTodo function

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      
      {/* TODO: Add form to create new todos */}
      <form className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      {/* TODO: Map over todos and render each one */}
      <div className="space-y-2">
        <p className="text-gray-500 text-center py-8">
          Your todos will appear here. Start by creating a "todos" table in Supabase!
        </p>
      </div>
    </div>
  );
}
