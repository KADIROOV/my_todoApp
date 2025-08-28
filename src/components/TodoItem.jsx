function TodoItem({ item, deleteTodo }) {
  return (
    <div className="transition duration-300 relative bg-[#2A2A2C] rounded-2xl p-4 border border-[#333] h-36 w-160 overflow-hidden shadow-lg">
      <div className="flex flex-col gap-2">
        {item.tags && (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[#3A3A3D] text-[#9B5CFF] w-fit">
            {item.tags}
          </span>
        )}
        <h3 className="text-lg font-semibold text-[#FFFFFF]">{item.text}</h3>
        <div className="flex items-center gap-2 text-xs">
          <small className="text-[#BDBDBD]">created: {item.createdAt}</small>
          {item.deadLine && (
            <span className="px-2 py-1 rounded-md text-xs  text-red-400">
              {new Date(item.deadLine).toLocaleString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "short",
              })}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        {item.priority && (
          <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#7B3CFF] to-[#9B5CFF] text-white font-medium shadow text-sm">
            {item.priority}
          </span>
        )}
      </div>
      <button
        onClick={() => deleteTodo(item.id)}
        className="absolute top-2 right-2 px-2 rounded-full text-[#ffff] hover:bg-[#FF4C4C]/15 transition text-lg"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
