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
  } = useTodos();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  return (
    <div className="bg-violet-200 relative mt-[-74px] flex flex-col w-90 gap-6 border-b-2 border-r-2  border-gray-700  px-5 py-6  min-h-screen">
      <h4 className="text-xl font-medium text-center bg-violet-400 text-violet-900 rounded-xl ">
        Developer Kadirov Akmaljon
      </h4>
      <button
        onClick={() => setIsOpen(true)}
        className="py-2 bg-[#220e53] text-white rounded-lg hover:bg-violet-800"
      >
        Add Task
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 transition"
        ></div>
      )}

      <div
        className={` flex flex-col gap-6 fixed top-0 left-0 h-full w-[360px]  bg-violet-200 border-2 border-violet-600 shadow-2xl p-6 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <input
          className="p-2 pr-12 border border-none bg-violet-50 rounded-xl outline-none"
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
          className="p-2 pr-12   border-none appearance-none rounded-xl focus:outline-none bg-violet-50 backdrop-blur-md "
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
          <option value="">Status</option>
          <option value="started">started</option>
          <option value="notStarted">Not started</option>
          <option value="done">Done</option>
        </select>
        <select
          value={tags}
          defaultValue={""}
          onChange={(e) => setTags(e.target.value)}
          className="p-2 pr-12 border border-none bg-violet-50 rounded-xl  appearance-none focus:outline-none backdrop-blur-md"
        >
          <option value="" disabled>
            Set tag
          </option>
          <option value="study">Study</option>
          <option value="workout">Workout</option>
          <option value="routine">Routine</option>
        </select>
        <input
          className="p-2 pr-12 border border-none rounded-xl bg-violet-50 focus:outline-none"
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
      <button className="py-2 bg-[#220e53] text-white rounded-lg hover:bg-violet-800">
        About Dev
      </button>
      <div className="py-2 text-violet-600 text-2xl rounded-lg flex justify-start items-center gap-6">
        <FaTelegram className="hover:text-violet-800" />
        <FaInstagram className="hover:text-violet-800" />
        <FaGithub className="hover:text-violet-800" />
      </div>
    </div>
  );
}

export default TodoInput;
