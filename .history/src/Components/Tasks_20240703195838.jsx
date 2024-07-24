import React from "react";
import NewTask from "./NewTask";
function Task({ onAdd, onDelete, tasks }) {
  return (
    <div>
      <NewTask onAdd={onAdd} />

      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between my-4">
            <span>{task.text}</span>
            <button
              className=" text-stone-700 hover:text-red-500"
              onClick={() => onDelete(task.id)}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
