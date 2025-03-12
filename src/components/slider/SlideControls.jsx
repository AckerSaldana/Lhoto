import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SlideControls = ({ onPrev, onNext }) => {
  return (
    <>
      {/* Control izquierdo con efecto hover mejorado */}
      <Box 
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 1
          }
        }}
      >
        <IconButton
          onClick={onPrev}
          sx={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            color: 'white',
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
            transition: 'all 0.3s ease',
            '&:hover': { 
              backgroundColor: 'rgba(97,218,251,0.7)',
              transform: 'scale(1.1)'
            },
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, md: 20 }, ml: 1 }} />
        </IconButton>
      </Box>

      {/* Control derecho con efecto hover mejorado */}
      <Box 
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 1
          }
        }}
      >
        <IconButton
          onClick={onNext}
          sx={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            color: 'white',
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
            transition: 'all 0.3s ease',
            '&:hover': { 
              backgroundColor: 'rgba(97,218,251,0.7)',
              transform: 'scale(1.1)'
            },
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, md: 20 }, ml: -0.5 }} />
        </IconButton>
      </Box>
    </>
  );
};

export default SlideControls;