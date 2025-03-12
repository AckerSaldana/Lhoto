import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import { globalStyles } from '../../styles/globalStyles';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
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

        {/* Contenido dinámico de las rutas */}
        <Box 
          component="main" 
          sx={{ 
            pt: { xs: 10, md: 12 }, 
            pb: { xs: 6, md: 8 },
            minHeight: '100vh',
            width: '100%'
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
