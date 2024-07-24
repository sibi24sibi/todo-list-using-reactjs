import React from "react";
import NewTodo from "./NewTodo";
function Todo({ onAdd, onDelete, todos }) {
  return (
    <div>
      <h2>Task</h2>
      <NewTodo onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className=" text-stone-800 my-4">
          These projects doesnot have any projects yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          (
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className=" text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
          )
        </ul>
      )}
    </div>
  );
}

export default Todo;
