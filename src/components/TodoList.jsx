import { useTodos } from "../Context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, toggleComplete, deleteTodo } = useTodos();

  return (
    <>
      <div className="ml-40 flex flex-col gap-10 p-6">
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
