import { useState } from "react";
import { useTodos } from "../Context/TodoContext";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function TodoInput() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    todo,
    setTodo,
    addTodo,
    priority,
    setPriority,
    status,
    setStatus,
    deadline,
    setDeadLine,
    tags,
    setTags,
    isDark,
  } = useTodos();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  return (
    <div
      className={`bg-violet-200/70 border-b border-r-2 transition-all duration-800  border-white relative  flex flex-col justify-between items-center w-90 gap-6   px-5 py-6  min-h-screen ${
        isDark ? "dark:bg-slate-950 transition-all duration-950" : ""
      }`}
    >
      <div className="flex flex-col w-90 gap-6 px-5">
        <h4
          className={`text-xl font-medium text-center transition-all duration-400  bg-violet-400  rounded-xl ${
            isDark
              ? "bg-violet-900 text-violet-50 transition-all duration-500"
              : "text-violet-900"
          }`}
        >
          Developer Kadirov Akmaljon
        </h4>
        <button
          onClick={() => setIsOpen(true)}
          className="py-2 bg-[#220e53] text-white rounded-lg hover:bg-violet-800"
        >
          Add Task
        </button>
        <button className="py-2 bg-[#220e53] text-white rounded-lg hover:bg-violet-800">
          About Dev
        </button>
      </div>
      <div>
        <div className="py-2 text-violet-600 text-2xl rounded-lg flex justify-center gap-6">
          <p className="text-[20px]">my socials:</p>
          <FaTelegram className="hover:text-violet-800" />
          <FaInstagram className="hover:text-violet-800" />
          <FaGithub className="hover:text-violet-800" />
        </div>
        <div className="py-2 text-violet-600 rounded-lg flex flex-col items-start gap-6">
          <p className="text-[20px] flex gap-6">
            contact:
            <span className="text-[14px] bg-violet-100 p-[4px] rounded-[8px]">
              +998 94 661 12 00
            </span>
          </p>
          <div className="flex flex-col gap-4 items-start">
            <div className="text-[14px] bg-violet-100 p-[4px] rounded-[8px]">
              akmaljonqodirov1223@gmail.com
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 transition"
        ></div>
      )}

      <div
        className={`flex flex-col gap-6 fixed top-0 left-0 h-full w-[360px] 
          border-2 shadow-2xl p-6 transform transition-transform duration-500 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          ${
            isDark
              ? "bg-slate-950 border-violet-400"
              : "bg-violet-200 border-violet-600"
          }`}
      >
        <input
          className={`p-2 pr-12 border border-none  rounded-xl outline-none ${
            isDark ? "bg-violet-800/20 text-white" : "bg-violet-50"
          }`}
          type="text"
          placeholder="Enter the task..."
          value={todo}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTodo(e.target.value)}
        />
        <select
          value={priority}
          defaultValue={""}
          onChange={(e) => setPriority(e.target.value)}
          className={`p-2 pr-12   border-none appearance-none rounded-xl focus:outline-none bg-violet-50 backdrop-blur-md`}
        >
          <option disabled value="">
            Priority
          </option>
          <option value="important" className="bg-violet-50">
            Important
          </option>
          <option value="recommended">Recommended</option>
          <option value="optional">Optional</option>
        </select>

        <select
          value={status}
          defaultValue={""}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 pr-12 border border-none bg-violet-50 rounded-xl appearance-none focus:outline-none outline-none backdrop-blur-md"
        >
          <option disabled value="">
            Status
          </option>
          <option value="started">started</option>
          <option value="notStarted">Not started</option>
          <option value="done">Done</option>
        </select>

        <select
          value={tags}
          defaultValue={""}
          onChange={(e) => setTags(e.target.value)}
          className="p-2 pr-12 border border-none overflow-auto   bg-violet-50 rounded-xl  appearance-none focus:outline-none backdrop-blur-md"
        >
          <option value="" disabled>
            Set tag
          </option>
          <option value="study">Study</option>
          <option value="Fitness">Fitness</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          <option value="Finance">Finance</option>
        </select>

        <input
          className={`p-2 pr-12 border border-none  rounded-xl outline-none bg-violet-50`}
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadLine(e.target.value)}
        />
        <button
          type="submit"
          disabled={todo.trim() === ""}
          className={`p-2 text-white rounded-xl mx-auto w-60 
            ${
              todo.trim() === ""
                ? "bg-violet-500 cursor-not-allowed"
                : "bg-[#220e53] hover:bg-violet-700 cursor-pointer"
            }`}
          onClick={addTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
