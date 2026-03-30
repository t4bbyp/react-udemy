import { useState } from "react";
import { projects } from "./ProjectList";
import ProjectView from "./ProjectView";

export default function NewProject({ onNewProject }) {
  const [projectTtl, setProjectTtl] = useState();
  const [projectDesc, setProjectDesc] = useState();
  const [projectDate, setProjectDate] = useState();

  function saveProject() {
    if (projectTtl && projectDesc && projectDate) {
      onNewProject({
        name: projectTtl,
        description: projectDesc,
        date: projectDate,
        tasks: [],
      });
    }
  }

  function changeTtl(event) {
    setProjectTtl(event.target.value);
  }

  function changeDesc(event) {
    setProjectDesc(event.target.value);
  }

  function changeDate(event) {
    setProjectDate(event.target.value);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          onClick={saveProject}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 
        hover:bg-stone-950"
        >
          Save
        </button>
      </menu>

      <form className="mt-4 text-left">
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Title
          </label>
          <input
            onChange={changeTtl}
            type="text"
            value={projectTtl}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 
      bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>

        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Description
          </label>
          <textarea
            onChange={changeDesc}
            value={projectDesc}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 
      bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>

        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Date
          </label>
          <input
            onChange={changeDate}
            value={projectDate}
            type="date"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 
      bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
      </form>
    </div>
  );
}
