import { useState } from "react";
import NewProjects from "./Components/NewProjects";
import NoProjects from "./Components/NoProjects";
import SideBar from "./Components/SideBar";
function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProjects />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjects onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}

export default App;
