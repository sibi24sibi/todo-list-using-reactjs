import Button from "./Button";

export default function SideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        your project
      </h2>
      <div>
        <Button
          onClick={onStartAddProject}
          className="px-4 py-2 text-slate-400 hover:text-slate-900 md:text-base rounded-md bg-slate-800 hover:bg-slate-400"
        >
          Add project
        </Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-2  hover:text-stone-200 ";
          if (project.id === selectProjectId) {
            cssClass += "text-stone-200 bg-stone-800";
          } else {
            cssClass += "text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClass}
              >
                {project.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
