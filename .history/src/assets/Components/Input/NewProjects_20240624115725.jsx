import Input from "./Input";

export default function NewPoject() {
  return (
    <div>
      <menu>
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
