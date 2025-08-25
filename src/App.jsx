import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  return (
    <div
      className="relative min-h-screen 
                 bg-[url('/src/assets/violet_wallpaper.jpg')] 
                 bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <TodoProvider>
        <div className="relative z-10">
          <Header />
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
