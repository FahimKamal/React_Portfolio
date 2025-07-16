import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <img src={project.heroImage} alt={project.title} />
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
