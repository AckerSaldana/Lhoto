import React, { useState } from 'react';
import { 
  Box,
  Container,
  Grid as MuiGrid,
  useMediaQuery,
  useTheme
} from '@mui/material';

// Componentes
import Navbar from '../components/layout/Navbar';
import MobileMenu from '../components/layout/MobileMenu';
import ImageSlider from '../components/slider/ImageSlider';
import ContentSection from '../components/content/ContentSection';

// Datos
import { images } from '../data/images';
import { globalStyles } from '../styles/globalStyles';

// Home component
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      {/* Estilos globales para reset */}
      <style>{globalStyles}</style>
      
      <Box sx={{ 
        backgroundColor: '#0c0c0c', 
        minHeight: '100vh',
        maxWidth: '100vw',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Navbar toggleMenu={toggleMenu} />
        <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Contenido principal */}
        <Container 
          maxWidth={false}
          sx={{ 
            pt: { xs: 10, md: 12 }, 
            pb: { xs: 6, md: 8 }, 
            px: { xs: 2, md: 4, lg: 6 },
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MuiGrid 
            container 
            spacing={4}
            direction={isTablet ? 'column' : 'row'}
            sx={{ 
              width: '100%',
              maxWidth: 'xl',
              mx: 'auto'
            }}
          >
            {/* Columna del slider */}
            <MuiGrid 
              item
              xs={12} 
              md={12}
            >
              <ImageSlider images={images} />
            </MuiGrid>

            {/* Columna de texto */}
            <MuiGrid 
              item
              xs={12} 
              md={8}
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ContentSection />
            </MuiGrid>
          </MuiGrid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Home;