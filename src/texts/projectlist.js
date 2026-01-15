export const ProjectStatus = {
  PLANNED: "planned",
  IN_PROGRESS: "in-progress",
  COMPLETED: "completed",
};

export const projects = [
  {
    id: "autonomous-landing",
    title: "Autonomous UAV Landing System",
    shortDescription:
      "Vision-based autonomous landing using YOLOv8 and IR emitter localization.",
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
    id: "portfolio-site",
    title: "Personal Portfolio Website",
    shortDescription:
      "A performant portfolio with filtering, responsive design, and clean UI.",
    status: ProjectStatus.COMPLETED,
    startDate: "2024-01",
    endDate: "2024-02",
    tech: ["React", "Tailwind"],
    tags: ["frontend"],
    links: {
      demo: "https://yourdomain.com",
    },
  },
];
