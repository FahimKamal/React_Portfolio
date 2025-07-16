import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <LazyImage src={project.heroImage} alt={project.title} width={600} height={400} />
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
