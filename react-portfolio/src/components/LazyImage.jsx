import React, { useState, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ src, alt, width, height, className, onClick }) => {
  const placeholderSrc = `https://placehold.co/${width}x${height}/EEE/31343C.png?text=Loading+Image...&font=lato`;
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className || ''} lazy-image ${imageLoaded ? 'loaded' : ''}`}
      onClick={onClick}
    />
  );
};

export default LazyImage;