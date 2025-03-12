import React from 'react';
import { 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = ({ menuOpen, toggleMenu }) => {
  const location = useLocation();
  
  // Arreglo con los items del menú
  const menuItems = [
    { name: 'Galería', path: '/galeria' },
    { name: 'Explorar', path: '/explorar' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <Drawer
      anchor="right"
      open={menuOpen}
      onClose={toggleMenu}
      sx={{
        '& .MuiDrawer-paper': {
          width: '70%',
          maxWidth: '300px',
          backgroundColor: 'rgba(12, 12, 12, 0.95)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
        }
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton 
          onClick={toggleMenu} 
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ p: 4 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.name} 
            component={Link}
            to={item.path}
            onClick={toggleMenu}
            sx={{ 
              mb: 2,
              backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              borderRadius: 1
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ 
                fontSize: '1.2rem', 
                fontWeight: 300,
                letterSpacing: 1
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileMenu;