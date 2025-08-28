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
    <div
      className={`bg-[#171616] border-r-2 transition-all duration-800  border-[#9B5CFF] relative  flex flex-col justify-between items-center w-90 gap-6  px-5 pt-8 pb-2  min-h-screen`}
    >
      <div className="flex flex-col w-90 gap-6 px-5">
        <button
          onClick={() => setIsOpen(true)}
          className="py-2 hover:bg-[#222224] text-white rounded-lg bg-[#333333]"
        >
          Add Task
        </button>
        <button className="py-2 hover:bg-[#222224] text-white rounded-lg bg-[#333333]">
          About Dev
        </button>
      </div>
      <div>
        <div className="py-2 text-[#6a6666] text-2xl rounded-lg flex justify-center gap-6">
          <p className="text-[20px]">my socials:</p>
          <FaTelegram className="hover:text-[#978e8e]" />
          <FaInstagram className="hover:text-[#978e8e]" />
          <FaGithub className="hover:text-[#978e8e]" />
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 transition"
        ></div>
      )}

      <div
        className={`flex flex-col gap-6 fixed top-0 left-0 h-full w-[356px] p-6 transform transition-transform bg-[#171616] duration-500 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <input
          className="p-2 pr-12 rounded-xl outline-none bg-[#222224] text-white placeholder:text-[#BDBDBD] border border-transparent focus:ring-2 focus:ring-[#FFB400] transition"
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
          className="p-2 pr-12 rounded-xl outline-none bg-[#222224] text-white placeholder:text-[#BDBDBD] border border-transparent focus:ring-2 focus:ring-[#FFB400] transition"
        >
          <option disabled value="">
            Priority
          </option>
          <option value="important">Important</option>
          <option value="recommended">Recommended</option>
          <option value="optional">Optional</option>
        </select>

        <select
          value={tags}
          defaultValue={""}
          onChange={(e) => setTags(e.target.value)}
          className="p-2 pr-12 rounded-xl outline-none bg-[#222224] text-white placeholder:text-[#BDBDBD] border border-transparent focus:ring-2 focus:ring-[#FFB400] transition"
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
          className="p-2 pr-12 rounded-xl outline-none bg-[#222224] text-white placeholder:text-[#BDBDBD] border border-transparent focus:ring-2 focus:ring-[#FFB400] transition"
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadLine(e.target.value)}
        />
        <button
          type="submit"
          disabled={todo.trim() === ""}
          className={`p-2 text-white rounded-xl mx-auto  w-60 flex justify-center items-center transition-all duration-200 hover:border-1 border-[#FFB400]
            ${
              todo.trim() === ""
                ? " bg-[#464648] cursor-not-allowed"
                : "bg-[#222224] cursor-pointer"
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
