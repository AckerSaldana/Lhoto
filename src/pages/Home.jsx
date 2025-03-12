import React, { useEffect, useState } from 'react';
import { 
  Container,
  Grid as MuiGrid,
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Button,
  Fade,
  Paper
} from '@mui/material';
import { Link } from 'react-router-dom';

// Componentes
import ImageSlider from '../components/slider/ImageSlider';
import ContentSection from '../components/content/ContentSection';

// Datos
import { images } from '../data/images';

// Home component
const Home = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loaded, setLoaded] = useState(false);

  // Efecto para animar la entrada de componentes
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box 
      sx={{ 
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        pt: { xs: 2, md: 0 }
      }}
    >
      {/* Elementos decorativos de fondo */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '5%', md: '10%' },
          left: '5%',
          width: { xs: '150px', md: '250px' },
          height: { xs: '150px', md: '250px' },
          background: 'radial-gradient(circle, rgba(97,218,251,0.05) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          filter: 'blur(40px)',
          borderRadius: '50%'
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: { xs: '100px', md: '200px' },
          height: { xs: '100px', md: '200px' },
          background: 'radial-gradient(circle, rgba(97,218,251,0.03) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          filter: 'blur(40px)',
          borderRadius: '50%'
        }}
      />
      
      <Container 
        maxWidth={false}
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 10, md: 12 },
          px: { xs: 2, md: 4, lg: 6 },
          maxWidth: '1800px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header de bienvenida animado */}
        <Fade in={loaded} timeout={1000}>
          <Box 
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 5, md: 8 },
              mx: 'auto',
              maxWidth: '900px'
            }}
          >
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.9rem',
                letterSpacing: 6,
                color: 'rgba(255,255,255,0.7)',
                mb: 1,
                display: 'block',
                position: 'relative',
                '&:before, &:after': {
                  content: '""',
                  position: 'absolute',
                  width: { xs: '40px', md: '80px' },
                  height: '1px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  top: '50%'
                },
                '&:before': {
                  left: { xs: '15%', md: '15%' }
                },
                '&:after': {
                  right: { xs: '15%', md: '15%' }
                }
              }}
            >
              BIENVENIDO A MI GALERÍA
            </Typography>
            
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: { xs: 2, md: 3 },
                background: 'linear-gradient(90deg, #ffffff 0%, #61dafb 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: { xs: 0, md: -1 }
              }}
            >
              Capturando mis Pensamientos
            </Typography>
            
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '700px',
                mx: 'auto',
                mb: { xs: 3, md: 4 },
                lineHeight: 1.7
              }}
            >
              Explora un poco de mi mente a lo largo de mi travesia de aprender a capturar momentos y emociones, una foto a la vez.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/galeria"
                variant="contained"
                sx={{
                  bgcolor: '#61dafb',
                  color: '#0c0c0c',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  '&:hover': {
                    bgcolor: 'rgba(97,218,251,0.9)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 20px rgba(97,218,251,0.3)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Ver Galería
              </Button>
              
              <Button
                component={Link}
                to="/explorar"
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  '&:hover': {
                    borderColor: '#61dafb',
                    bgcolor: 'rgba(97,218,251,0.05)',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Explorar Estaciones
              </Button>
            </Box>
          </Box>
        </Fade>

        <MuiGrid 
          container 
          spacing={6}
          direction={isTablet ? 'column' : 'row'}
          sx={{ 
            width: '100%',
            mx: 'auto'
          }}
        >
          {/* Columna del slider con efecto de elevación */}
          <MuiGrid 
            item
            xs={12} 
            md={12}
          >
            <Fade in={loaded} timeout={1200}>
              <Paper 
                elevation={0} 
                sx={{ 
                  borderRadius: 6,
                  overflow: 'hidden',
                  backgroundColor: 'transparent',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 6,
                    padding: '2px',
                    background: 'linear-gradient(120deg, rgba(255,255,255,0.1), rgba(97,218,251,0.2), rgba(255,255,255,0))',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    zIndex: 0
                  }
                }}
              >
                <ImageSlider images={images} />
              </Paper>
            </Fade>
          </MuiGrid>

          {/* Columna de texto con estilo mejorado */}
          <MuiGrid 
            item
            xs={12} 
            md={12}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Fade in={loaded} timeout={1400}>
              <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
                <ContentSection />
              </Box>
            </Fade>
          </MuiGrid>
        </MuiGrid>
        
        {/* Sección de características destacadas */}
        <Fade in={loaded} timeout={1600}>
          <Box sx={{ mt: { xs: 6, md: 12 }, mb: 4 }}>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 600,
                mb: { xs: 4, md: 6 },
                color: 'white',
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#61dafb',
                  bottom: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }
              }}
            >
              Nuestras Fotografías
            </Typography>
            
            <MuiGrid container spacing={3}>
              {featureItems.map((item, index) => (
                <MuiGrid item xs={12} sm={6} md={3} key={index}>
                  <Fade in={loaded} timeout={1600 + (index * 200)}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        backgroundColor: 'rgba(26,26,26,0.7)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 4,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 30px rgba(0,0,0,0.2)'
                        },
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(97,218,251,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          color: '#61dafb'
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          mb: 2,
                          fontWeight: 600
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Paper>
                  </Fade>
                </MuiGrid>
              ))}
            </MuiGrid>
          </Box>
        </Fade>
        
        {/* Footer con llamada a la acción */}
        <Fade in={loaded} timeout={2000}>
          <Box 
            sx={{ 
              mt: { xs: 6, md: 10 }, 
              textAlign: 'center',
              py: 6,
              borderTop: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 600,
                mb: 3,
                color: 'white'
              }}
            >
              ¿Listo para explorar más?
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                mb: 4,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Descubre nuestra colección completa y aprende más sobre el proceso creativo detrás de cada fotografía.
            </Typography>
            
            <Button
              component={Link}
              to="/fotografo"
              variant="contained"
              sx={{
                bgcolor: '#61dafb',
                color: '#0c0c0c',
                fontSize: '1rem',
                fontWeight: 500,
                px: 5,
                py: 1.5,
                borderRadius: '50px',
                '&:hover': {
                  bgcolor: 'rgba(97,218,251,0.9)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(97,218,251,0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Conoce al Fotógrafo
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

// Datos para las características destacadas
const featureItems = [
  {
    title: 'Alta Resolución',
    description: 'Todas nuestras fotografías están capturadas en formato RAW y procesadas para mantener la máxima calidad y detalle.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm18-2H2v20h20V2zm-3 7h-3V6h-2v3h-3v2h3v3h2v-3h3V9z"/></svg>
  },
  {
    title: 'Luz Natural',
    description: 'Usamos solo iluminación natural para capturar la verdadera esencia y colores de cada estación.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 22c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6-8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2-7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm12 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/></svg>
  },
  {
    title: 'Detalles Únicos',
    description: 'Nos enfocamos en capturar los detalles sutiles que hacen que cada estación sea única y especial.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.8 22.6L17.9 19l-3.5 2 .8-3.8-3.1-2.5 3.9-.3 1.2-3.6 1.2 3.7 3.9.3-3.1 2.5.8 3.8-3.5-2-1.9 3.5zM12 6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020 12c0-4.42-3.58-8-8-8-1.42 0-2.77.37-3.94 1.03l1.45 1.45a6.1 6.1 0 012.49-.48zm-6 6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 004 12c0 4.42 3.58 8 8 8 1.42 0 2.77-.37 3.94-1.03l-1.45-1.45A6.1 6.1 0 0112 18c-3.31 0-6-2.69-6-6z"/></svg>
  },
  {
    title: 'Series Temáticas',
    description: 'Organizamos nuestras fotografías en series temáticas que cuentan historias visuales coherentes.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/></svg>
  }
];

export default Home;