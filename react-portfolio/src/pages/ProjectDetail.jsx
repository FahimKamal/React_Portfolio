import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { parseMarkdown } from '../utils/markdownParser';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    fetch('/data/portfolio-data.json')
      .then(response => response.json())
      .then(data => {
        const foundProject = data.projects.find(p => p.id === projectId);
        setProject(foundProject);

        // Collect all images for the lightbox
        const images = [];
        if (foundProject.heroImage) images.push(foundProject.heroImage);
        if (foundProject.levelMaps) images.push(...foundProject.levelMaps.map(map => map.url));
        if (foundProject.certificate && foundProject.certificate.imageUrl) images.push(foundProject.certificate.imageUrl);
        if (foundProject.screenshots) images.push(...foundProject.screenshots);
        setAllImages(images);
      })
      .catch(error => console.error('Error fetching project details:', error));
  }, [projectId]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateLightbox = useCallback((direction) => {
    if (selectedImageIndex === null) return;

    let newIndex = selectedImageIndex + direction;
    if (newIndex < 0) {
      newIndex = allImages.length - 1;
    } else if (newIndex >= allImages.length) {
      newIndex = 0;
    }
    setSelectedImageIndex(newIndex);
  }, [selectedImageIndex, allImages]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex !== null) {
        if (event.key === 'ArrowLeft') {
          navigateLightbox(-1);
        } else if (event.key === 'ArrowRight') {
          navigateLightbox(1);
        } else if (event.key === 'Escape') {
          handleCloseLightbox();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, navigateLightbox, handleCloseLightbox]);

  if (!project) {
    return <div>Loading project...</div>;
  }

  const renderHTML = (content) => {
    return { __html: parseMarkdown(content) };
  };

  return (
    <div className="project-detail-page">
      <header className="project-header">
        <h1>{project.title}</h1>
        <div className="badges">
          {project.badges.map(badge => (
            <a href={badge.url} key={badge.label} target="_blank" rel="noopener noreferrer">
              <img src={`https://img.shields.io/badge/${encodeURIComponent(badge.label.replace(/-/g, '--'))}-${encodeURIComponent(badge.value.replace(/-/g, '--'))}-${badge.color}?logo=${badge.logo || ''}`} alt={`${badge.label} badge`} />
            </a>
          ))}
        </div>
      </header>

      {project.githubUrl && (
        <section className="cta-section">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
            View on GitHub
          </a>
        </section>
      )}

      <section
        className="visual-showcase"
        style={project.youtubeEmbedUrl && !project.releaseUrl ? { marginBottom: '1.5rem' } : {}}
      >
        <p align="center">
          <img src={project.heroImage} alt={`${project.title} Hero Image`} className="hero-image" onClick={() => handleImageClick(allImages.indexOf(project.heroImage))}/>
          <br />
          <em className="project-description">{project.shortDescription}</em>
        </p>
        
        {project.youtubeEmbedUrl && (
          <div className="youtube-embed">
            <iframe src={project.youtubeEmbedUrl} title={`YouTube video player for ${project.title}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        )}
      </section>

      {project.releaseUrl && (
        <section className="cta-section">
          <a href={project.releaseUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
            Download the Latest Release Here
          </a>
        </section>
      )}

      <section className="project-section" dangerouslySetInnerHTML={renderHTML(project.context.content)}></section>
      <section className="project-section" dangerouslySetInnerHTML={renderHTML(project.overview.content)}></section>

      {project.gddUrl && (
        <section className="cta-section">
          <a href={project.gddUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
            View the Full Game Design Document (PDF)
          </a>
        </section>
      )}

      {project.levelMaps && project.levelMaps.length > 0 && (
        <section className="project-section">
          <h2>Level Map Overview</h2>
          <div className="level-maps">
            {project.levelMaps.map((map, index) => (
              <figure key={map.url}>
                <img src={map.url} alt={map.caption} onClick={() => handleImageClick(allImages.indexOf(map.url))} />
                <figcaption>{map.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="project-section">
        <h2>{project.keyFeatures.title}</h2>
        <ul>
          {project.keyFeatures.features.map((feature, index) => (
            <li key={index} dangerouslySetInnerHTML={renderHTML(feature)}></li>
          ))}
        </ul>
      </section>

      {project.certificate && (
        <section className="project-section certificate-section">
          <h2>Certificate of Completion</h2>
          <a href={project.certificate.verifyUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.certificate.imageUrl} alt="Certificate" onClick={() => handleImageClick(allImages.indexOf(project.certificate.imageUrl))} />
          </a>
          <br/>
          <a href={project.certificate.verifyUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
            Verify Certificate
          </a>
        </section>
      )}

      <section className="project-section">
        <h2>Development Screenshots</h2>
        <div className="screenshots-gallery">
          {project.screenshots.map((screenshot, index) => (
            <img key={index} src={screenshot} alt={`${project.title} screenshot ${index + 1}`} onClick={() => handleImageClick(allImages.indexOf(screenshot))} />
          ))}
        </div>
      </section>

      <section className="project-section">
        <h2>{project.techStack.title}</h2>
        <ul className="tech-stack-list">
          {project.techStack.items.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={renderHTML(item)}></li>
          ))}
        </ul>
      </section>

      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={handleCloseLightbox}>
          <button className="lightbox-nav-button prev" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>&#10094;</button>
          <img src={allImages[selectedImageIndex]} alt="Enlarged image" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-nav-button next" onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
