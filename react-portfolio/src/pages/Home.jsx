import React, { useState, useEffect } from 'react';
import LazyImage from '../components/LazyImage';

const Home = () => {
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

  const { name, title, description, photoUrl } = personalInfo;

  return (
    <div className="home">
      <LazyImage src={photoUrl} alt={name} width={200} height={200} />
      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Home;
