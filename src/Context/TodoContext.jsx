import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [tags, setTags] = useState("");
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("light");
  };

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
          completed: false,
          priority,
          status,
          createdAt: new Date().toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          }),
          deadLine: deadLine || null,
          tags: tags,
        },
      ]);
      setTodo("");
      setPriority("important");
      setDeadLine("");
    } else {
      alert("Please fill the input!!!");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        addTodo,
        toggleComplete,
        deleteTodo,
        priority,
        setPriority,
        status,
        setStatus,
        deadLine,
        setDeadLine,
        tags,
        setTags,
        isDark,
        toggleTheme,
      }}
    >
      <div>{children}</div>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
