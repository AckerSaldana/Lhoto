import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SlideControls = ({ onPrev, onNext }) => {
  return (
    <Box sx={{
      position: 'absolute',
      bottom: { xs: 12, md: 20 },
      right: { xs: 16, md: 24 },
      display: 'flex',
      gap: 1,
      zIndex: 20
    }}>
      <IconButton
        onClick={onPrev}
        sx={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(4px)',
          color: 'white',
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
          '&:hover': { 
            backgroundColor: 'rgba(255,255,255,0.2)',
          }
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: { xs: 15, md: 18 }}} />
      </IconButton>

      <IconButton
        onClick={onNext}
        sx={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(4px)',
          color: 'white',
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
          '&:hover': { 
            backgroundColor: 'rgba(255,255,255,0.2)',
          }
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: { xs: 15, md: 18 } }} />
      </IconButton>
    </Box>
  );
};

export default SlideControls;