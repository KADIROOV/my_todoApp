import { useTodos } from "../Context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, toggleComplete, deleteTodo } = useTodos();

  return (
    <>
      <div className="mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-x-30 gap-y-4 p-6">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
