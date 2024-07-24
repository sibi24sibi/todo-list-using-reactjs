import { useState } from "react";
import NewPoject from "./Components/NewProjects";
import Noprojects from "./Components/NoProjects";
import SideBar from "./Components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    seletedProjectId: undefined,
    projects: [],
  });

  function handleSelectedProject{
    setProjectState(pervState =>{
      return{
       ...pervState,
        seletedProjectId:null
      }
    })
    }
  }

  
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar />
        {projectState.seletedProjectId === null ? <NewProjects onStartAddProject={handleSelectedProject} />: <NoPojects  onStartAddProject={handleSelectedProject} />}
      </main>
    </>
  );
}

export default App;
