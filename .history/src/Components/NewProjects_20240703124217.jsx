import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function NewPoject({ onAdd, onCancel }) {
  const modal = useRef();
  const name = useRef();
  const task = useRef();
  const date = useRef();

  function handlesave() {
    const enteredName = name.current.value;
    const enteredTask = task.current.value;
    const enteredDate = date.current.value;

    if (
      enteredName.trim() === "" ||
      enteredTask.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      name: enteredName,
      task: enteredTask,
      date: enteredDate,
    });
  }

  return (
    <div>
      <Modal ref={modal}>
        <div className="p-4 bg-white text-red-700 ">
          <h2 className="text-lg font-semibold">Error</h2>
          <p className="mt-2 text-sm">Please fill in all fields.</p>
        </div>
      </Modal>
      <div className=" w-[35rem] mt-10">
        <menu className="flex items-center justify-end  gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="p-2 bg-neutral-200 font-semibold text-slate-900 rounded-md   hover:text-slate-800 hover:bg-red-400 "
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handlesave}
              className="p-2 bg-neutral-200 font-semibold text-slate-900 rounded-md hover:text-slate-500 hover:bg-lime-400"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={name} label="Name" textarea={false} />
          <Input ref={task} label="Task" textarea />
          <Input ref={date} type="date" label="Date" textarea={false} />
        </div>
      </div>
    </div>
  );
}
