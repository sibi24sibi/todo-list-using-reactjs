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
        <Input label="task" textarea={true} />
        <Input label="date" textarea={false} />
      </div>
    </div>
  );
}
