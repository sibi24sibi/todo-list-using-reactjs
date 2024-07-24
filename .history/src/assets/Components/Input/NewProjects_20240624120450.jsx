import Input from "./Input";

export default function NewPoject() {
  return (
    <div className=" w-32 my-10">
      <menu className="flex items-center justify-center gap-4 my-4">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
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
