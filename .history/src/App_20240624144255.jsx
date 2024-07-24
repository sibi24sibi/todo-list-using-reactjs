import NewPoject from "./Components/NewProjects";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar />
        <NewPoject />
      </main>
    </>
  );
}

export default App;
