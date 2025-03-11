import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleMenu }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar 
      position="fixed" 
      elevation={0} 
      sx={{ 
        backdropFilter: 'blur(10px)', 
        backgroundColor: 'rgba(12, 12, 12, 0.7)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h5" 
          sx={{ 
            flexGrow: 1, 
            fontWeight: '300', 
            letterSpacing: 3, 
            color: 'white',
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          L<span style={{ fontWeight: 600 }}>HOTO</span>
        </Typography>
        
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
            <Button 
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
                  width: '0%',
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
              Galería
            </Button>
            <Button 
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
                  width: '0%',
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
              Explorar
            </Button>
            <Button 
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
                  width: '0%',
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
              Contacto
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;