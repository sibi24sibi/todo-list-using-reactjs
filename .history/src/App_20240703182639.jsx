import { useState } from "react";
import NewProjects from "./Components/NewProjects";
import NoProjects from "./Components/NoProjects";
import SideBar from "./Components/SideBar";
import SelectedProject from "./Components/SelectedProject";
function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    todos: [],
  });

  function handleAddTodos(text) {
    setProjectState((prevState) => {
      const todosId = Math.random();
      const newTodos = {
        text: text,
        procjectId: prevState.selectedProjectId,
        id: todosId,
      };
      return {
        ...prevState,
        todos: [newTodos, ...prevState.todos],
      };
    });
  }

  function handleDeleteTodo() {}

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onDeleteTodos={handleDeleteTodos}
      onAddTodos={handleAddTodos}
      todos={projectsState.todos}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProjects onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjects onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen flex gap-8">
        <SideBar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
