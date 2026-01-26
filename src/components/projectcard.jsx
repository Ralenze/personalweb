
import '../index.css';
import githubIcon from '../assets/github-mark.svg'
const statusColor = {
  planned: "rounded-none border-b md:border text-text hover:text-blue-500 px-4",
  "ongoing": "rounded-none border-b md:border duration-150 text-text mx-4 hover:text-blue-500",
  completed: " rounded-none border-b md:border text-text mx-4 hover:text-blue-500",
};

export default function ProjectCard({ project }) {
  return (
    <div className=" border-b border-white/25 hover:bg-neutral-900 duration-150 bg-black p-5 shadow-md hover:shadow-xl transition">
      {/* Header */}
      <div className="flex items-center justify-between mb-3  text-blue-100 hover:text-blue-500">
        <h3 className="text-lg font-semibold ">
          {project.title}
        </h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            statusColor[project.status]
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-white/70 mb-4">
        {project.shortDescription}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-neutral-900 text-white/60"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 text-sm">
        {project.links?.github && (
            <a
            href={project.links.github}
            target="_blank">
          <img
          src={githubIcon}
           
            className="  hover:cursor-pointer h-8 w-8"
          >
        
            </img>
            </a>
        )}
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            className="text-text hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}