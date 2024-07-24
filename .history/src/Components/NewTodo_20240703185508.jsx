import React, { useState } from "react";

function NewTodo({ onAdd }) {
  const [enteredValue, setEnteredvalue] = useState();
  function handleChange(e) {
    setEnteredvalue(e.target.value);
  }
  function handleClick() {
    onAdd(enteredValue);
    setEnteredvalue("");
  }
  return (
    <div className="flex item-center gap-4">
      <input
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm  bg-stone-200"
      />
      <button
        onChange={handleClick}
        type="button"
        className=" text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTodo;
