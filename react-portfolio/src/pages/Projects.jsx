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
    <div>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
