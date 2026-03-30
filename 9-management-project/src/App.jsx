import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import { projects } from "./components/ProjectList";
import { useState } from "react";
import ProjectView from "./components/ProjectView";

function App() {
  const [selectedProject, setSelectedProject] = useState();
  const [newProject, setNewProject] = useState(false);
  const [inProjects, setProjects] = useState(projects);

  function handleNewProject(projectData) {
    setProjects((prevProjects) => {
      const lastId =
        prevProjects.length > 0
          ? prevProjects[prevProjects.length - 1].projectId
          : 0;

      return [
        ...prevProjects,
        {
          ...projectData,
          projectId: lastId + 1,
        },
      ];
    });

    setNewProject(false);
  }

  function handleDeleteProject(projectId) {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.projectId !== projectId)
    );
    setSelectedProject(null);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        title="Your Projects"
        onSelectProject={setSelectedProject}
        onNew={setNewProject}
        projects={inProjects}
      />

      {newProject ? (
        <NewProject onNewProject={handleNewProject} />
      ) : !selectedProject || inProjects.length === 0 ? (
        <NoProject />
      ) : (
        <ProjectView
          {...selectedProject}
          onDeleteProject={handleDeleteProject}
        />
      )}
    </main>
  );
}

export default App;
