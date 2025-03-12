import React from 'react';
import { 
  Container,
  Typography,
  Box,
  Button,
  Fade
} from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fade in={true} timeout={800}>
      <Container 
        maxWidth="md" 
        sx={{ 
          py: 8, 
          textAlign: 'center',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: '700', 
            fontSize: { xs: '5rem', md: '8rem' },
            letterSpacing: 1,
            color: 'white',
            mb: 2
          }}
        >
          404
        </Typography>
        
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: '500', 
            mb: 3,
            color: 'white'
          }}
        >
          Página no encontrada
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 5, 
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.1rem',
            maxWidth: '600px'
          }}
        >
          Lo sentimos, la página que estás buscando no existe o ha sido movida. 
          Por favor, regresa a la página principal o explora nuestra galería.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button 
            component={Link}
            to="/"
            variant="contained" 
            sx={{ 
              px: 4,
              py: 1.5,
              backgroundColor: '#61dafb',
              color: '#0c0c0c',
              fontWeight: 500,
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#4dc0ed',
              }
            }}
          >
            Ir a Inicio
          </Button>
          
          <Button 
            component={Link}
            to="/galeria"
            variant="outlined" 
            sx={{ 
              px: 4,
              py: 1.5,
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'white',
              fontWeight: 500,
              borderRadius: '50px',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'transparent'
              }
            }}
          >
            Ver Galería
          </Button>
        </Box>
      </Container>
    </Fade>
  );
};

export default NotFound;