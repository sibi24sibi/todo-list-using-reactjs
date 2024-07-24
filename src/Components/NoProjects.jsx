import noProjects from "../assets/no-projects.png";
import Button from "./Button";

export default function Noprojects({ onStartAddProject }) {
  return (
    <div className="w-2/3  mt-24 text-center">
      <img
        src={noProjects}
        alt="No Projects"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-2xl my-4  text-stone-400 ">No Project Selected</h2>
      <p className=" text-lg my-4  text-stone-500 ">
        No Project Selected or Create New Project
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
