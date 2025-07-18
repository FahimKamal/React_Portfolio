import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/portfolio-data.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">My Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map(project => (
          <div key={project.id} className="col">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
