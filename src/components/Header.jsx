import { AiFillBulb } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import { useTodos } from "../Context/TodoContext";

function Header() {
  const { isDark, toggleTheme } = useTodos();
  return (
    <div
      className={`py-4 p-12  bg-violet-200/70 border-b transition-all duration-400  border-white flex justify-around items-center w-full mx-auto ${
        isDark
          ? "dark:bg-slate-950 dark:text-violet-200  transition-all duration-500  "
          : ""
      }`}
    >
      <h1 className="text-4xl ">Todo-app</h1>
      <p className="flex justify-center items-center gap-2">
        Finish your Tasks with Awesome Todo-App <AiFillBulb />
      </p>
      <h4 className="text-4xl">Focus on Task</h4>
      <button
        onClick={toggleTheme}
        className="bg-violet-50/20 rounded-xl flex justify-center items-center p-2"
      >
        {isDark ? <MdDarkMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
}

export default Header;
