import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ActionButtons = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
      <Button 
        component={Link}
        to="/coleccion"
        variant="contained" 
        sx={{ 
          borderRadius: '50px',
          px: 3,
          py: 1.2,
          textTransform: 'none',
          backgroundColor: 'white',
          color: '#0c0c0c',
          fontSize: '0.95rem',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)'
          },
          boxShadow: 'none'
        }}
      >
        Ver Colección Completa
      </Button>
      <Button 
        component={Link}
        to="/fotografo"
        variant="outlined" 
        sx={{ 
          borderRadius: '50px',
          px: 3,
          py: 1.2,
          textTransform: 'none',
          borderColor: 'rgba(255,255,255,0.3)',
          color: 'white',
          fontSize: '0.95rem',
          fontWeight: 500,
          '&:hover': {
            borderColor: 'white',
            backgroundColor: 'transparent'
          }
        }}
      >
        Sobre el Fotógrafo
      </Button>
    </Box>
  );
};

export default ActionButtons;