import React, { useState } from "react";

function NewTodo() {
  const [enteredValue, setEnteredvalue] = useState();
  function handleChangeEvent(e) {
    setEnteredvalue(e.target.value);
  }
  return (
    <div className="flex item-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm  bg-stone-200" />
      <button type="button" className=" text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}

export default NewTodo;
