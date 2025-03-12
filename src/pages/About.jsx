import React from 'react';
import { 
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Fade,
  Divider,
  Button,
  Link as MuiLink
} from '@mui/material';
import { Link } from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// Importar la imagen correctamente
import ProfileImage from '../images/profile.jpg'; // Asegúrate de actualizar esta ruta

const About = () => {
  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header con animación */}
        <Box sx={{ mb: 8, textAlign: 'center', position: 'relative' }}>
          <Box 
            sx={{ 
              position: 'absolute', 
              width: '100px', 
              height: '100px', 
              background: 'radial-gradient(circle, rgba(97,218,251,0.3) 0%, rgba(0,0,0,0) 70%)', 
              top: '-30px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              zIndex: -1 
            }}
          />
          
          <Typography 
            variant="overline"
            sx={{
              letterSpacing: 6,
              color: 'rgba(255,255,255,0.7)',
              mb: 2,
              fontSize: '0.9rem',
              display: 'block',
              position: 'relative',
              '&:before, &:after': {
                content: '""',
                position: 'absolute',
                width: { xs: '30px', md: '60px' },
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.3)',
                top: '50%'
              },
              '&:before': {
                left: { xs: '10%', md: '30%' }
              },
              '&:after': {
                right: { xs: '10%', md: '30%' }
              }
            }}
          >
            SOBRE EL ARTISTA
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: '600', 
              mb: 2,
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
              letterSpacing: 1,
              color: 'white',
              background: 'linear-gradient(90deg, #ffffff 0%, #61dafb 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            El Entusiasta
            <Box component="span" sx={{ 
              display: 'inline-block',
              ml: 1.5,
              width: '10px',
              height: '10px',
              backgroundColor: '#61dafb',
              borderRadius: '50%',
              verticalAlign: 'super',
              boxShadow: '0 0 10px 2px rgba(97,218,251,0.7)'
            }}/>
          </Typography>
          
          <Typography 
            variant="subtitle1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '700px',
              mx: 'auto',
              fontStyle: 'italic',
              mb: 4
            }}
          >
            "Captura a traves de tu lente la vida que ves con tus ojos."
          </Typography>
        </Box>

        <Paper 
          elevation={10}
          sx={{ 
            backgroundColor: 'rgba(26, 26, 26, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 6,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 20px 80px rgba(0,0,0,0.5)'
          }}
        >
          <Grid container>
            <Grid item xs={12} md={5} sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box 
                sx={{ 
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 6, md: 8 },
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    width: '150%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(97,218,251,0.1) 0%, rgba(0,0,0,0) 70%)',
                    top: '-50%',
                    left: '-25%'
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      border: '1px solid rgba(97,218,251,0.3)',
                      borderRadius: '50%',
                      top: '20px',
                      left: '20px',
                      zIndex: 0
                    }
                  }}
                >
                  <Avatar 
                    src={ProfileImage} // Utiliza la variable importada
                    alt="Acker Saldaña"
                    sx={{ 
                      width: { xs: 250, md: 320 }, 
                      height: { xs: 250, md: 320 },
                      border: '4px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                      zIndex: 1,
                      position: 'relative'
                    }}
                  />
                </Box>
                
                {/* Icono decorativo */}
                <CameraAltIcon 
                  sx={{ 
                    position: 'absolute', 
                    bottom: '10%', 
                    right: '10%',
                    fontSize: '3rem',
                    color: 'rgba(97,218,251,0.2)',
                    transform: 'rotate(-15deg)'
                  }} 
                />
              </Box>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <Box 
                sx={{ 
                  p: { xs: 4, md: 6 },
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: 'white',
                    mb: 3,
                    fontWeight: 600,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    position: 'relative',
                    display: 'inline-block',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: '40px',
                      height: '3px',
                      backgroundColor: '#61dafb',
                      bottom: '-10px',
                      left: '0'
                    }
                  }}
                >
                  Acker Saldaña
                </Typography>
                
                <Box sx={{ mt: 3, mb: 4 }}>
                  <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                    <MuiLink href="https://instagram.com" target="_blank" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#61dafb' } }}>
                      <InstagramIcon />
                    </MuiLink>
                    <MuiLink href="https://twitter.com" target="_blank" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#61dafb' } }}>
                      <TwitterIcon />
                    </MuiLink>
                    <MuiLink href="https://linkedin.com" target="_blank" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#61dafb' } }}>
                      <LinkedInIcon />
                    </MuiLink>
                  </Box>
                </Box>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Recién empezando en fotografía, Acker ha estado encontrando su voz y pensamiento a través de la lente de su cámara. Su pasión por capturar momentos efímeros lo ha llevado a explorar diversos estilos y técnicas.
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  Sus trabajos son una mezcla de fotografía de paisajes y retratos, con un enfoque en la naturaleza y la vida silvestre. Lo que distingue su trabajo es la atención al detalle y la búsqueda constante de la luz perfecta.
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.8,
                    fontSize: '1.05rem'
                  }}
                >
                  La colección "Estaciones del año" es el resultado de la experimentación y la exploración de Acker en los colores y la belleza de la naturaleza que lo rodea día a día en el Tecnológico de Monterrey. Cada imagen refleja su creciente entendimiento de la composición y el manejo de la luz natural.
                </Typography>
                
                <Box sx={{ mt: 'auto', pt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    component={Link} 
                    to="/galeria" 
                    variant="contained"
                    sx={{
                      bgcolor: '#61dafb',
                      color: '#0c0c0c',
                      px: 3,
                      py: 1.2,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      borderRadius: '50px',
                      '&:hover': {
                        bgcolor: 'rgba(97,218,251,0.9)'
                      }
                    }}
                  >
                    Ver Galería
                  </Button>
                  <Button 
                    component={Link} 
                    to="/contacto" 
                    variant="outlined"
                    sx={{
                      borderColor: 'rgba(255,255,255,0.3)',
                      color: 'white',
                      px: 3,
                      py: 1.2,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      borderRadius: '50px',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'transparent'
                      }
                    }}
                  >
                    Contactar
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Sección de habilidades o equipo */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600, 
              mb: 4, 
              color: 'white',
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '50px',
                height: '2px',
                backgroundColor: '#61dafb',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)'
              }
            }}
          >
            Equipo fotográfico
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                elevation={4}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <Typography variant="h6" color="white" gutterBottom>Cámara</Typography>
                <Divider sx={{ my: 1.5, backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <Typography variant="body2" color="rgba(255,255,255,0.7)">Canon EOS R50</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                elevation={4}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <Typography variant="h6" color="white" gutterBottom>Lente principal</Typography>
                <Divider sx={{ my: 1.5, backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <Typography variant="body2" color="rgba(255,255,255,0.7)">RF 50mm f/2.8L</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                elevation={4}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <Typography variant="h6" color="white" gutterBottom>Teleobjetivo</Typography>
                <Divider sx={{ my: 1.5, backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <Typography variant="body2" color="rgba(255,255,255,0.7)">RF 70-200mm f/2.8L</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                elevation={4}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <Typography variant="h6" color="white" gutterBottom>Edición</Typography>
                <Divider sx={{ my: 1.5, backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <Typography variant="body2" color="rgba(255,255,255,0.7)">Adobe PhotoShop</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fade>
  );
};

export default About;