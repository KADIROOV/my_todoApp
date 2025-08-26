function TodoItem({ item, deleteTodo, toggleComplete }) {
  return (
    <div className=" border-violet-200   transition duration-300 bg-white rounded-2xl p-5 border h-44 w-90  sm:w-[300px]s  overflow-hidden">
      <div className="flex justify-between items-start ">
        <div className="flex gap-2 flex-wrap">
          {item.tags && (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-600">
              {item.tags}
            </span>
          )}
        </div>
        <button
          onClick={() => deleteTodo(item.id)}
          className="px-2 rounded-full hover:bg-red-50 text-red-500 transition"
        >
          ✕
        </button>
      </div>

      {/* Todo text */}
      <h3 className="mt-3 text-lg font-semibold text-gray-800">{item.text}</h3>

      {/* Priority + Status */}
      <div className="mt-2 flex items-center gap-3 text-sm">
        {item.priority && (
          <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-violet-500 to-violet-700 text-white font-medium">
            {item.priority}
          </span>
        )}
        {item.status && (
          <span className="px-2 py-1 rounded-lg bg-green-100 text-green-700 font-medium">
            {item.status}
          </span>
        )}
      </div>

      {/* Created + Deadline */}
      <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
        <small>created: {item.createdAt}</small>
        {item.deadLine && (
          <span className="px-2 py-1 rounded-md bg-red-100 text-red-600 font-semibold">
            <small>
              {new Date(item.deadLine).toLocaleString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "short",
              })}
            </small>
          </span>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
