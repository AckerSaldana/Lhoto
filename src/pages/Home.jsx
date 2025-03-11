import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Grid2 as Grid, 
  Paper,
  Box,
  IconButton,
  Container,
  Fade,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../index.css';

// Images
import pavoreal from "../images/1M.jpg";
import flores from "../images/2M.jpg";
import sillas from "../images/4M.jpg";
import silla from "../images/6M.jpg";

const images = [
    {
        src: pavoreal,
        title: "Pavoreal del Tec",
        description: "Pavoreal colorido capturado mostrando su belleza natural en su hábitat"
    },
    {
        src: flores,
        title: "Primavera",
        description: "Flores vibrantes capturadas en la estación más colorida del año"
    },
    {
        src: sillas,
        title: "Sillas Coloridas",
        description: "Composición de sillas multicolores que representan diversidad y creatividad"
    },
    {
        src: silla,
        title: "Silla Solitaria",
        description: "La simplicidad de una silla solitaria que cuenta historias de ausencia y presencia"
    }
];

const globalStyles = `
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: #0c0c0c;
  }
`;

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    
    const goToNext = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

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

                {/* Mobile Menu Drawer */}
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
                        <ListItem button sx={{ mb: 2 }}>
                            <ListItemText 
                                primary="Galería" 
                                primaryTypographyProps={{ 
                                    fontSize: '1.2rem', 
                                    fontWeight: 300,
                                    letterSpacing: 1
                                }} 
                            />
                        </ListItem>
                        <ListItem button sx={{ mb: 2 }}>
                            <ListItemText 
                                primary="Explorar" 
                                primaryTypographyProps={{ 
                                    fontSize: '1.2rem', 
                                    fontWeight: 300,
                                    letterSpacing: 1
                                }} 
                            />
                        </ListItem>
                        <ListItem button sx={{ mb: 2 }}>
                            <ListItemText 
                                primary="Contacto" 
                                primaryTypographyProps={{ 
                                    fontSize: '1.2rem', 
                                    fontWeight: 300,
                                    letterSpacing: 1
                                }} 
                            />
                        </ListItem>
                    </List>
                </Drawer>

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
                    <Grid 
                        container 
                        spacing={4}
                        direction={isTablet ? 'column-reverse' : 'row'}
                        sx={{ 
                            width: '100%',
                            maxWidth: 'xl',
                            mx: 'auto'
                        }}
                    >
                        {/* Columna del slider */}
                        <Box 
                            xs={12} 
                            md={8} 
                            sx={{ 
                                position: 'relative',
                                width: '100%'
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    backgroundColor: '#1a1a1a', 
                                    position: 'relative',
                                    height: { 
                                        xs: '50vh',
                                        sm: '60vh',
                                        md: '70vh'
                                    },
                                    maxWidth: '100%',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                                }}
                            >
                                {/* Slider Manual */}
                                {images.map((image, index) => (
                                    <Box 
                                        key={index} 
                                        sx={{ 
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            opacity: currentSlide === index ? 1 : 0,
                                            transition: 'opacity 0.8s ease',
                                            zIndex: currentSlide === index ? 1 : 0
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={image.src}
                                            alt={image.title}
                                            onError={(e) => {
                                                console.error(`Error loading image: ${image.src}`);
                                                e.target.onerror = null;
                                            }}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block',
                                                transform: `scale(1) translateY(${offsetY * 0.1}px)`,
                                                transition: 'transform 0.5s ease-out'
                                            }}
                                        />
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
                                                        {image.title}
                                                    </Typography>
                                                    <Typography 
                                                        variant="body1" 
                                                        sx={{ 
                                                            color: 'rgba(255,255,255,0.8)',
                                                            maxWidth: '80%',
                                                            fontSize: { xs: '0.9rem', sm: '1rem' }
                                                        }}
                                                    >
                                                        {image.description}
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        </Box>
                                    </Box>
                                ))}

                                {/* Indicadores del slider */}
                                <Box 
                                    sx={{ 
                                        position: 'absolute',
                                        bottom: 24,
                                        left: 0,
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        zIndex: 10
                                    }}
                                >
                                    {images.map((_, index) => (
                                        <Box 
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            sx={{
                                                width: 30,
                                                height: 4,
                                                borderRadius: 2,
                                                mx: 0.5,
                                                bgcolor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.4)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                    ))}
                                </Box>

                                {/* Botones de navegación */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: { xs: 12, md: 20 },
                                    right: { xs: 16, md: 24 },
                                    display: 'flex',
                                    gap: 1,
                                    zIndex: 20
                                }}>
                                    <IconButton
                                        onClick={goToPrev}
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
                                        onClick={goToNext}
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
                            </Paper>
                        </Box>

                        {/* Columna de texto */}
                        <Grid 
                            xs={12} 
                            md={4}
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
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
                                        Una colección cuidadosamente seleccionada de fotografías que capturan las estaciones del año en nuestro hermoso planeta.
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                                        <Button 
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
                                </Box>
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Home;
