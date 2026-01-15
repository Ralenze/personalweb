import '../index.css';
import PageButton from '../components/pagebutton.jsx'
import TextBox from '../components/textbox.jsx'
import ReturnButton from '../components/returnbutton.jsx';
import { useState } from "react";
import { projects, ProjectStatus } from "../texts/projectlist";
import ProjectCard from "../components/projectcard.jsx";

 function Experience() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (statusFilter === "all") return true;
    return p.status === statusFilter;
  });

  return (
    <>
    <ReturnButton/>
    <div className="min-h-screen min-w-screen bg-black px-6 py-16">

      <h1 className="text-3xl text-center font-mono text-white mb-8">
        Projects
      </h1>

      {/* Filters */}
      <div className="flex mb-10 font-mono ">
        {["all", ...Object.values(ProjectStatus)].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-2xl text-sm transition
              ${
                statusFilter === status
                  ? "bg-white text-black"
                  : "border-white/20 text-white/70 hover:bg-white/10 hover:text-blue-500 hover:cursor-pointer"
              }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 font-mono">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Experience