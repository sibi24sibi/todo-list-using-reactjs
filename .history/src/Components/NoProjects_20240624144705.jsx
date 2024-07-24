import noProjects from "../assets/no-projects.png";

export default function Noprojects() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <img src={noProjects} alt="No Projects" className="w-16 h-16" />
      <h2 className="text-2xl ">No Project Selected</h2>
      <p className=" text-lg">No Project Selected or Create New Project</p>
      <p>
        <button className="">Create new Project</button>
      </p>
    </div>
  );
}
