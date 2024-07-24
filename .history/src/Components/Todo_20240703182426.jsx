import React from "react";
import NewTodos from "./NewTodos";
function Todos({ onAdd, onDelete, todos }) {
  return (
    <div>
      <h2>Task</h2>
      <NewTodos onAdd={onAdd} />
      {todos.length === 0 && (
        <p className=" text-stone-800 my-4">
          These projects doesnot have any projects yet
        </p>
      )}
      {todos.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between my-4">
              <span>{todo.text}</span>
              <button className=" text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
