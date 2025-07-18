import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const rowClass = isEven ? 'flex-lg-row-reverse' : '';

  return (
    <div className="container col-xxl-8 px-4 ">
      <div className={`row align-items-center g-5  ${rowClass}`}>
        <div className="col-12 col-sm-10 col-lg-7">
          <LazyImage src={project.heroImage} alt={project.title} className="d-block mx-lg-auto img-fluid" width={700} height={500} />
        </div>
        <div className="col-lg-5">
          <h2 className="project-title fw-bold lh-1 mb-3">{project.title}</h2>
          <p className="lead">{project.shortDescription}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to={`/projects/${project.id}`} className="btn btn-primary btn-lg px-4 me-md-2">View Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
