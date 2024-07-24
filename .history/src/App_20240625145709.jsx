import { useState } from "react";
import NewPoject from "./Components/NewProjects";
import Noprojects from "./Components/NoProjects";
import SideBar from "./Components/SideBar";
function App() {
  const [ProjectState, setProjectState] = useState({
    selectProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjectId: null,
      };
    });
  }

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar onStartAddProject={handleStartAddProject} />
        <Noprojects onStartAddProject={handleStartAddProject} />
      </main>
    </>
  );
}

export default App;
