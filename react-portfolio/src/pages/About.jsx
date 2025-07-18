import React, { useState, useEffect } from 'react';
import LazyImage from '../components/LazyImage';

const About = () => {
  const [data, setData] = useState(null);
  const [animatedText, setAnimatedText] = useState('');
  const phrases = ["Gamer", "Dreamer", "Creator"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetch('/data/portfolio-data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (!data) return;

    const typeSpeed = 150;
    const deleteSpeed = 100;
    const pauseTime = 2000;

    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setAnimatedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        setAnimatedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentPhrase.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed
    );

    if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      clearTimeout(timeout);
      setTimeout(() => setIsDeleting(true), pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, data]);


  if (!data) {
    return <div>Loading information...</div>;
  }

  const { personalInfo, contactInfo } = data;

  return (
    <div className="container px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6 text-center">
          <LazyImage src={personalInfo.photoUrl} alt={personalInfo.name} width={200} height={200} className="rounded-circle mb-3" />
          <h2>{personalInfo.name}</h2>
          <h3>{personalInfo.title} ({animatedText})</h3>
          <p className="lead">{personalInfo.description}</p>
        </div>
        <div className="col-lg-6">
          <h3>Get in Touch:</h3>
          <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-4 me-md-2">LinkedIn</a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-lg px-4">GitHub</a>
            <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-lg px-4">YouTube</a>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning btn-lg px-4">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
