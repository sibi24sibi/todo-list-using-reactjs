import React from "react";
import Todo from "./Todo";

function SelectedProject({ project, onDelete }) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[32rem] mt-16">
      <header className="pb-4 mb-4  border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl  font-bold  text-stone-600 mb-2">
            {project.name}
          </h1>
          <button
            onClick={onDelete}
            className=" text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <div>
          <p className="mb-4 text-stone-400">{project.task}</p>
          <p className="text-stone-600 whitespace-pre-wrap">{formattedDate}</p>
        </div>
      </header>
      <Todo />
    </div>
  );
}

export default SelectedProject;
