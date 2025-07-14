import React, { useState, useEffect } from 'react';

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
    <div className="contact-page">
      <div className="contact-info-section">
        <img src={personalInfo.photoUrl} alt={personalInfo.name} className="contact-photo" />
        <h2>{personalInfo.name}</h2>
        <h3>{personalInfo.title} ({animatedText})</h3>
        <p>{personalInfo.description}</p>
      </div>

      <div className="social-links-section">
        <h3>Get in Touch:</h3>
        <p className="contact-email"><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <ul className="social-buttons-list">
          <li>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-button linkedin">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.923-2.063-2.065 0-1.145.92-2.066 2.063-2.066 1.145 0 2.064.922 2.064 2.066 0 1.142-.92 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="social-button github">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.804 1.305 3.49.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.295-1.552 3.3-1.23 3.3-1.23.645 1.653.24 2.873.105 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </li>
          <li>
            <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" className="social-button youtube">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.018 3.018 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.935.502 5.814a3.018 3.018 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.018 3.018 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.935-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
          </li>
          <li>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-button instagram">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92.333 4.06.723c-.82.39-1.478.95-2.131 1.606-.654.656-1.214 1.314-1.604 2.132-.39.86-.593 1.714-.653 2.993-.058 1.28-.072 1.687-.072 4.01s.014 2.737.072 4.018c.06 1.279.261 2.135.653 2.993.39.82 1.04 1.478 1.69 2.131.654.656 1.312 1.214 2.132 1.604.86.39 1.714.593 2.993.653 1.28.058 1.687.072 4.01.072s2.737-.014 4.018-.072c1.279-.06 2.135-.261 2.993-.653.82-.39 1.478-1.04 2.131-1.69.656-.654 1.214-1.312 1.604-2.132.39-.86.593-1.714.653-2.993-.058-1.28-.072-1.687-.072-4.01s-.014-2.737-.072-4.018c-.06-1.279-.261-2.135-.653-2.993-.39-.82-1.04-1.478-1.69-2.131-.654-.656-1.312-1.214-2.132-1.604-.86-.39-1.714-.593-2.993-.653C15.26 0 14.853.014 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.899.42.42.68 1.01.898 1.57.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.014 3.585-.072 4.85c-.054 1.17-.248 1.805-.413 2.227-.218.562-.477.96-.899 1.382-.42.42-.81 0-1.57-.898-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s-.014-3.585-.072-4.85c.054-1.17.248-1.805.413-2.227.218-.562.477-.96.899-1.382.42-.42.81-.68 1.57-.898.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0 3.678c-3.402 0-6.162 2.76-6.162 6.162 0 3.402 2.76 6.162 6.162 6.162 3.402 0 6.162-2.76 6.162-6.162 0-3.402-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.795.646-1.44 1.44-1.44.795 0 1.44.646 1.44 1.44z"/></svg>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;