import { useState } from "react";
import NewPoject from "./Components/NewProjects";
import Noprojects from "./Components/NoProjects";
import SideBar from "./Components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    seletedProject: undefined,
    projects: [],
  });

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar />
        <Noprojects />
      </main>
    </>
  );
}

export default App;
