import { useState } from "react";
import NewPoject from "./Components/NewProjects";
import Noprojects from "./Components/NoProjects";
import SideBar from "./Components/SideBar";

const [ProjectState,setProjectState] = useState({

  selectProjectId:undefined
  projects:[]
}

)
function App() {
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
