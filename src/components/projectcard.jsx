
import '../index.css';
import githubIcon from '../assets/github-mark.svg'
const statusColor = {
  planned: "bg-gray-50",
  "in-progress": "bg-yellow-500",
  completed: "bg-green-500",
};

export default function ProjectCard({ project }) {
  return (
    <div className=" border-b border-white/25 bg-black p-5 shadow-md hover:shadow-xl transition">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>
        <span
          className={`text-xs px-2 py-1 rounded-full text-black ${
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
            className="text-xs px-2 py-1 rounded bg-white/10 text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 text-sm">
        {project.links?.github && (
          <img
          src={githubIcon}
            href={project.links.github}
            target="_blank"
            className="text-blue-400 hover:cursor-pointer h-8 w/8"
          >
        
            </img>
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