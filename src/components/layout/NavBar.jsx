import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleMenu }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  // Verificar la ruta activa
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Galería', path: '/galeria' },
    { name: 'Explorar', path: '/explorar' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={5} 
      sx={{ 
        backdropFilter: 'blur(10px)', 
        backgroundColor: 'rgba(12, 12, 12, 0.7)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Toolbar sx={{ 
          px: { xs: 2, md: 4 },
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              component={Link}
              to="/"
              variant="h5" 
              sx={{ 
                fontWeight: '300', 
                letterSpacing: 3, 
                color: 'white',
                fontFamily: "'Montserrat', sans-serif",
                textDecoration: 'none'
              }}
            >
              L<span style={{ fontWeight: 600 }}>HOTO</span>
            </Typography>
          </Box>
          
          {isMobile ? (
            <IconButton 
              edge="end" 
              color="inherit" 
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button 
                  key={item.name}
                  component={Link}
                  to={item.path}
                  color="inherit" 
                  sx={{ 
                    mx: 1, 
                    textTransform: 'none', 
                    fontSize: '0.9rem', 
                    color: 'white',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: isActive(item.path) ? '80%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'white',
                      transition: 'all 0.3s ease'
                    },
                    '&:hover:after': {
                      width: '80%'
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;