import React from "react";
import { Project } from "./Project";

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="row">
      {projects.map((project) => (
      <div className="card">
        <img src={project.imageUrl} alt={project.name} />
        <section className="section dark">
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{project.description}</p>
          <p>{project.budget}</p>
        </section>
      </div>
      ))}
    </div>

    // <ul className="row">
    //   {projects.map((project) => (
    //     <li key={project.id}>{project.name}</li>
    //   ))}
    // </ul>
  );
}

export default ProjectList;