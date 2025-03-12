import React from 'react';
import { Box, Fade } from '@mui/material';

const SlideIndicators = ({ count, current, onChange }) => {
  return (
    <Fade in={true} timeout={800}>
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: 24,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          zIndex: 10
        }}
      >
        {Array.from({ length: count }).map((_, index) => (
          <Box 
            key={index}
            onClick={() => onChange(index)}
            sx={{
              width: index === current ? 35 : 25,
              height: 4,
              borderRadius: 10,
              backgroundColor: index === current ? '#61dafb' : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              '&:hover': {
                backgroundColor: index === current ? '#61dafb' : 'rgba(255, 255, 255, 0.5)',
                transform: 'scaleY(1.5)'
              },
              '&::after': index === current ? {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                boxShadow: '0 0 8px 1px rgba(97, 218, 251, 0.7)',
                animation: 'pulse 2s infinite'
              } : {}
            }}
          />
        ))}
        
        {/* Animación de pulso para el indicador activo */}
        <style>
          {`
            @keyframes pulse {
              0% {
                opacity: 0.8;
                transform: scale(1);
              }
              50% {
                opacity: 0.4;
                transform: scale(1.2);
              }
              100% {
                opacity: 0.8;
                transform: scale(1);
              }
            }
          `}
        </style>
      </Box>
    </Fade>
  );
};

export default SlideIndicators;