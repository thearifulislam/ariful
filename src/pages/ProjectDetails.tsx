import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../data/allProjects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === id);

  useEffect(() => {
    if (project && project.behanceUrl) {
      window.location.href = project.behanceUrl;
    }
  }, [project]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Project not found.</div>;
  }

  if (!project.behanceUrl) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">No Behance link available for this project.</div>;
  }

  // Optionally, you can show a loading spinner or message while redirecting
  return <div className="min-h-screen flex items-center justify-center text-2xl">Redirecting to Behance...</div>;
};

export default ProjectDetails;
