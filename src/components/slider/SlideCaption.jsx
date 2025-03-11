import React from 'react';
import { Box, Typography, Fade } from '@mui/material';

const SlideCaption = ({ title, description, index }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.85))',
        p: { xs: 3, sm: 4, md: 6 },
        pb: { xs: 6, sm: 8 },
        textAlign: 'left'
      }}
    >
      <Fade in={true} timeout={1500}>
        <Box>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: 3,
              fontSize: '0.8rem',
              mb: 1,
              display: 'block'
            }}
          >
            {`FOTOGRAFÍA ${index + 1}`}
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              color: 'white', 
              fontWeight: '600', 
              mb: 1,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' },
              letterSpacing: 1
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '80%',
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            {description}
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default SlideCaption;