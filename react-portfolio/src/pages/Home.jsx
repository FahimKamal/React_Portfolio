import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

import ThemeToggle from '../components/ThemeToggle';

const Home = ({ currentTheme, toggleTheme }) => {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    fetch('/data/portfolio-data.json')
      .then(response => response.json())
      .then(data => setPersonalInfo(data.personalInfo))
      .catch(error => console.error('Error fetching personal info:', error));
  }, []);

  if (!personalInfo) {
    return <div>Loading...</div>;
  }

  const { name, title, description } = personalInfo;

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
      
      <main className="px-3">
        <h1>{name}</h1>
        <p className="lead">{title}</p>
        <p className="lead">{description}</p>
        <p className="lead">
          <Link to="/projects" className="btn btn-lg btn-secondary fw-bold border-white bg-white">View My Work</Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
