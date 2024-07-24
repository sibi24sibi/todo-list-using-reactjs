import React from "react";
import NewTodo from "./NewTodo";
function Todo({ onAdd, onDelete, tasks }) {
  return (
    <div>
      <h2>Task</h2>
      <NewTodo onAdd={onAdd} />
      {tasks.length === 0 && (
        <p>These projects doesnot have any projects yet</p>
      )}
      {tasks.length > 0 && (
        <ul>
          {" "}
          (
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
            </li>
          ))}
          )
        </ul>
      )}
    </div>
  );
}

export default Todo;
