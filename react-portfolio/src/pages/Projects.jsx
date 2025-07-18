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
    <div className="py-5">
      <h1 className="text-center mb-5">My Projects</h1>
      {projects.map((project, index) => (
        <React.Fragment key={project.id}>
          <div className="container">
            <ProjectCard project={project} index={index} />
          </div>
          {index < projects.length - 1 && <div className="b-example-divider full-width-divider"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
