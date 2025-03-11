import React from 'react';
import { Box, Typography, Fade } from '@mui/material';
import ActionButtons from './ActionButtons';

const ContentSection = () => {
  return (
    <Fade in={true} timeout={1500}>
      <Box sx={{ 
        color: 'white', 
        textAlign: 'left', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        maxWidth: { xs: '100%', md: '90%' }
      }}>
        <Typography 
          variant="overline"
          sx={{
            letterSpacing: 4,
            color: 'rgba(255,255,255,0.7)',
            mb: 2,
            fontSize: '0.9rem'
          }}
        >
          SERIE FOTOGRÁFICA
        </Typography>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: '600', 
            mb: 3,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            letterSpacing: 1,
            lineHeight: 1.1
          }}
        >
          Estaciones del año
          <Box component="span" sx={{ 
            display: 'inline-block',
            ml: 1,
            width: '8px',
            height: '8px',
            backgroundColor: '#61dafb',
            borderRadius: '50%',
            verticalAlign: 'super'
          }}/>
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4, 
            color: 'rgba(255,255,255,0.7)',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6
          }}
        >
          Una colección cuidadosamente seleccionada de fotografías que capturan y simulan las estaciones del año en nuestro campus.
        </Typography>
        <ActionButtons />
      </Box>
    </Fade>
  );
};

export default ContentSection;