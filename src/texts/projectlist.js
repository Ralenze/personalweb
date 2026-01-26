export const ProjectStatus = {
  PLANNED: "planned",
  IN_PROGRESS: "ongoing",
  COMPLETED: "completed",
};

export const projects = [
  {
    id: "autonomous-landing",
    title: "Landing Model",
    shortDescription: "Vision-based autonomous landing using YOLOv11",
    status: ProjectStatus.IN_PROGRESS,
    startDate: "2024-05",
    tech: ["Python", "YOLOv8", "OpenCV", "ROS"],
    tags: ["robotics", "cv", "ml"],
    featured: true,
    links: {
      github: "https://github.com/you/uav-landing",
    },
  },
  {
    id: "code-royale",
    title: "Code Royale",
    shortDescription:
      "A multiplayer coding battle game where players solve challenges in real-time. Hackathon project.",
    status: ProjectStatus.COMPLETED,
    startDate: "2025-10",
    endDate: "2025-10",
    tech: ["React", "Convex", "Node.js", "AI"],
    tags: ["frontend", "backend", "AI"],
    links: {
      github: "https://github.com/Epicslooyer/Stormhacks",
    },
  },
  {
    id: "portfolio-site",
    title: "Personal Website",
    shortDescription: "My own website!! ",
    status: ProjectStatus.IN_PROGRESS,
    startDate: "2026-01",
    endDate: "2026-01",
    tech: ["React", "Convex", "Node.js", "AI"],
    tags: ["frontend", "backend", "AI"],
    links: {
      github: "https://github.com/Ralenze/personalweb",
    },
  },
  {
    id: "grantify",
    title: "Grantify",
    shortDescription:
      "Thousands of Canadian scholarships with personalized recommendations through AI. ",
    status: ProjectStatus.IN_PROGRESS,
    startDate: "2026-01",
    endDate: "2026-03",
    tech: ["React", "Firebase", "Node.js", "OpenRouter"],
    tags: ["frontend", "backend", "AI"],
    links: {
      github: "https://github.com/joshrtust/Grantify",
    },
  },
];
