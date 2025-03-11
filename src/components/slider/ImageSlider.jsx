import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import SlideCaption from './SlideCaption';
import SlideIndicators from './SlideIndicators';
import SlideControls from './SlideControls';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const goToNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: '#1a1a1a', 
        position: 'relative',
        height: { 
          xs: '50vh',
          sm: '60vh',
          md: '70vh'
        },
        maxWidth: '100%',
        boxShadow: '0 20px 40px rgba(34, 33, 33, 0.2)'
      }}
    >
      {/* Slider Manual */}
      {images.map((image, index) => (
        <Box 
          key={index} 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 0.8s ease',
            zIndex: currentSlide === index ? 1 : 0
          }}
        >
          <Box
            component="img"
            src={image.src}
            alt={image.title}
            onError={(e) => {
              console.error(`Error loading image: ${image.src}`);
              e.target.onerror = null;
            }}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transform: `scale(1) translateY(${offsetY * 0.1}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          />
          <SlideCaption 
            title={image.title} 
            description={image.description} 
            index={index} 
          />
        </Box>
      ))}

      {/* Indicadores del slider */}
      <SlideIndicators 
        count={images.length} 
        current={currentSlide} 
        onChange={setCurrentSlide} 
      />

      {/* Botones de navegación */}
      <SlideControls onPrev={goToPrev} onNext={goToNext} />
    </Paper>
  );
};

export default ImageSlider;