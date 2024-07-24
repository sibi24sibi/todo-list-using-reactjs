import React from "react";
import NewTask from "./NewTask";
function Task({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className=" font-medium text-xl">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className=" text-stone-800 my-4">
          These projects does not have any projects yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map(
            (task) =>
              task.projectId ===
              project.id(
                <li key={task.id} className="flex justify-between my-4">
                  <span>{task.text}</span>
                  <button
                    className=" text-stone-700 hover:text-red-500"
                    onClick={() => onDelete(task.id)}
                  >
                    Clear
                  </button>
                </li>
              )
          )}
        </ul>
      )}
    </section>
  );
}

export default Task;
