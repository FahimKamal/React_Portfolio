import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <img src={project.heroImage} alt={project.title} />
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-status">
          <span className={`status ${project.status.toLowerCase()}`}>{project.status}</span>
          {project.status === 'Completed' && project.completionDate && (
            <span className="completion-date">Completed on: {new Date(project.completionDate).toLocaleDateString()}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
