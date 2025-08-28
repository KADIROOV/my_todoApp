import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  return (
    <div
      className="relative min-h-screen 
                 
                 bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[#1B1A1A]"></div>

      <TodoProvider>
        <div className="relative z-10">
          <div className="flex">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
