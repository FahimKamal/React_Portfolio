import React, { useState, useEffect } from 'react';

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
      <img src={photoUrl} alt={name} />
      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Home;
