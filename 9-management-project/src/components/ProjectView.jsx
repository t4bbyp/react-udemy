import { useState } from "react";

export default function ProjectView({
  projectId,
  name,
  description,
  date,
  tasks,
  onDeleteProject,
}) {
  const [newTask, setNewTask] = useState();
  const [initialTasks, setTasks] = useState(tasks || []);

  function onAddTask() {
    if (newTask) {
      setTasks((prevTasks) => {
        const lastId =
          prevTasks.length > 0 ? prevTasks[prevTasks.length - 1].taskId : 0;

        return [
          ...prevTasks,
          {
            taskId: lastId + 1,
            desc: newTask,
          },
        ];
      });
    }
  }

  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== taskId));
  }

  function deleteProject() {
    onDeleteProject(projectId);
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{name}</h1>
          <button
            onClick={deleteProject}
            className="text-stone-600 hover:text-red-500"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <input
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={() => onAddTask(tasks)}
        className="text-stone-600 hover:text-stone-950 ms-5"
      >
        Add Task
      </button>
      {initialTasks && initialTasks.length > 0 && (
        <ul className="mt-8">
          {initialTasks.map((task) => (
            <li
              key={task.taskId}
              className="flex justify-between my-7 px-4 py-7 rounded-md bg-stone-100"
            >
              {task.desc}
              <button
                onClick={() => handleDeleteTask(task.taskId)}
                className="text-stone-700 hover:text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
