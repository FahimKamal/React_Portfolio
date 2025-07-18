import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="card h-100 shadow-sm text-decoration-none text-dark">
      <LazyImage src={project.heroImage} alt={project.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.shortDescription}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{project.status}</small>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
