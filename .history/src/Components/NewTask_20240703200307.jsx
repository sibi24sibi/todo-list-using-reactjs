import React, { useState } from "react";

function NewTask({ onAdd }) {
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
        value={enteredValue}
      />
      <button
        onChange={handleClick}
        className=" text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
