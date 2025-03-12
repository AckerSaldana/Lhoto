import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Fade } from '@mui/material';
import SlideCaption from './SlideCaption';
import SlideIndicators from './SlideIndicators';
import SlideControls from './SlideControls';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [direction, setDirection] = useState('right');
  const [transitioning, setTransitioning] = useState(false);
  
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const goToNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setPrevSlide(currentSlide);
    setDirection('right');
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setTransitioning(false), 800);
  };

  const goToPrev = () => {
    if (transitioning) return;
    setTransitioning(true);
    setPrevSlide(currentSlide);
    setDirection('left');
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setTransitioning(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        setPrevSlide(currentSlide);
        setDirection('right');
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [images.length, currentSlide, transitioning]);

  // Calcular el progreso para la animación de la barra de progreso
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (transitioning) return;
    
    setProgress(0);
    const duration = 6000; // Duración en ms antes del cambio de diapositiva
    const interval = 50; // Intervalo de actualización en ms
    const steps = duration / interval;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      setProgress(currentStep / steps * 100);
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [currentSlide, transitioning]);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: { xs: 3, md: 4 },
        overflow: 'hidden',
        backgroundColor: 'rgba(12, 12, 12, 0.9)', 
        position: 'relative',
        height: { 
          xs: '50vh',
          sm: '60vh',
          md: '75vh'
        },
        width: '100%',
        maxWidth: '100%',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
          zIndex: 10
        }
      }}
    >
      {/* Overlay con efecto de gradiente */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.1) 100%)',
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />
      
      {/* Barra de progreso */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '3px',
          width: `${progress}%`,
          backgroundColor: '#61dafb',
          zIndex: 20,
          transition: 'width 0.1s linear',
          boxShadow: '0 0 10px rgba(97, 218, 251, 0.7)'
        }}
      />
      
      {/* Contador de diapositivas */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          padding: '8px 12px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#61dafb', 
            fontWeight: 600,
            fontSize: '0.9rem'
          }}
        >
          {`${currentSlide + 1} / ${images.length}`}
        </Typography>
      </Box>

      {/* Slider con efecto de transición avanzado */}
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
            transform: currentSlide === index 
              ? 'scale(1)' 
              : (prevSlide === index 
                ? `scale(${direction === 'right' ? 1.1 : 0.9})` 
                : 'scale(1)'),
            transition: 'opacity 0.8s ease, transform 1.5s ease',
            zIndex: currentSlide === index ? 1 : 0,
            overflow: 'hidden'
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
              
              transition: 'transform 4s ease-out',
              filter: 'brightness(0.9)',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
              }
            }}
          />
          
          {/* Overlay de textura para añadir profundidad */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.03,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
              pointerEvents: 'none'
            }}
          />
          
          {/* Viñeta en los bordes */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              boxShadow: 'inset 0 0 150px rgba(0,0,0,0.5)',
              pointerEvents: 'none'
            }}
          />
          
          <Fade in={currentSlide === index} timeout={1200}>
            <Box>
              <SlideCaption 
                title={image.title} 
                description={image.description} 
                index={index} 
              />
            </Box>
          </Fade>
        </Box>
      ))}

      {/* Indicadores del slider con estilo actualizado */}
      <SlideIndicators 
        count={images.length} 
        current={currentSlide} 
        onChange={setCurrentSlide} 
      />

      {/* Botones de navegación actualizados */}
      <SlideControls onPrev={goToPrev} onNext={goToNext} />
    </Paper>
  );
};

export default ImageSlider;