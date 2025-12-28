
import { useState, useEffect } from "react";
import {supabase} from "api/utils/supabase/client.js";
function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos.length > 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <ol>
            <li key={todo}>{todo}</li>
        </ol>
      ))}
    </div>
  )
}
export default Page
