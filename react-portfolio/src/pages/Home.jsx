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
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <LazyImage src={photoUrl} alt={name} className="d-block mx-lg-auto img-fluid" width={700} height={500} />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{name}</h1>
          <h2 className="fw-light">{title}</h2>
          <p className="lead">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
