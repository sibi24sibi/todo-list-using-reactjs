import Input from "./Input";

export default function NewPoject() {
  return (
    <div className=" w-32 mt-10">
      <menu className="flex items-center justify-center gap-4 my-4">
        <li>
          <button className="p-2 bg-neutral-400 font-semibold text-slate-200 rounded-md   hover:text-slate-800 hover:bg-red-400 ">
            Cancel
          </button>
        </li>
        <li>
          <button className="p-2 bg-neutral-400 font-semibold text-slate-200 rounded-md hover:text-slate-500 hover:bg-lime-400">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Name" textarea={false} />
        <Input label="Task" textarea />
        <Input label="Due Date" textarea={false} />
      </div>
    </div>
  );
}
