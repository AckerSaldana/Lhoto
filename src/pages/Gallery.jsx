import React, { useState } from 'react';
import { 
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Fade,
  Modal,
  IconButton,
  Button,
  Tabs,
  Tab,
  Divider,
  useMediaQuery,
  useTheme,
  Paper
} from '@mui/material';
import { images } from '../data/images';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import CollectionsIcon from '@mui/icons-material/Collections';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Ejemplo de múltiples colecciones
  const collections = [
    {
      id: 'estaciones',
      title: 'Estaciones del año',
      description: 'Fotografías que capturan la esencia de las diferentes estaciones en nuestro campus.',
      images: images
    },
    {
      id: 'arquitectura',
      title: 'Arquitectura',
      description: 'Explorando líneas, formas y espacios en estructuras urbanas.',
      images: images // Usar las mismas imágenes como ejemplo, pero en producción cambiarías por otra colección
    },
    {
      id: 'naturaleza',
      title: 'Vida Silvestre',
      description: 'La belleza y diversidad de la flora y fauna de nuestra región.',
      images: images // Usar las mismas imágenes como ejemplo, pero en producción cambiarías por otra colección
    }
  ];

  const handleOpen = (image, index) => {
    setCurrentImage({ ...image, index });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleNext = () => {
    const currentCollection = collections[activeTab];
    const nextIndex = (currentImage.index + 1) % currentCollection.images.length;
    setCurrentImage({ 
      ...currentCollection.images[nextIndex], 
      index: nextIndex 
    });
  };

  const handlePrev = () => {
    const currentCollection = collections[activeTab];
    const prevIndex = currentImage.index === 0 
      ? currentCollection.images.length - 1 
      : currentImage.index - 1;
    setCurrentImage({ 
      ...currentCollection.images[prevIndex], 
      index: prevIndex 
    });
  };

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Header con efecto de gradiente */}
        <Box sx={{ mb: 8, textAlign: 'center', position: 'relative' }}>
          <Box 
            sx={{ 
              position: 'absolute', 
              width: '150px', 
              height: '150px', 
              background: 'radial-gradient(circle, rgba(97,218,251,0.15) 0%, rgba(0,0,0,0) 70%)', 
              top: '-50px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              zIndex: -1,
              filter: 'blur(15px)'
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
                width: { xs: '40px', md: '80px' },
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                top: '50%'
              },
              '&:before': {
                left: { xs: '15%', md: '30%' }
              },
              '&:after': {
                right: { xs: '15%', md: '30%' }
              }
            }}
          >
            COLECCIONES
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: '700', 
              mb: 3,
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
            Galería Fotográfica
            <Box component="span" sx={{ 
              display: 'inline-block',
              ml: 1.5,
              width: '10px',
              height: '10px',
              backgroundColor: '#61dafb',
              borderRadius: '50%',
              verticalAlign: 'super',
              boxShadow: '0 0 10px 2px rgba(97,218,251,0.5)'
            }}/>
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 5, 
              color: 'rgba(255,255,255,0.7)',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Explora nuestras diversas colecciones fotográficas, cada una con un enfoque único y una historia que contar.
            Haz clic en cualquier imagen para verla en tamaño completo.
          </Typography>
          
          {/* Tabs para cambiar entre colecciones */}
          <Box sx={{ mb: 6 }}>
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              centered={!isMobile}
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#61dafb',
                  height: 3,
                  borderRadius: '3px 3px 0 0'
                },
                '& .MuiTab-root': {
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  mx: 1,
                  transition: 'all 0.3s ease',
                  '&.Mui-selected': {
                    color: '#61dafb',
                  },
                  '&:hover': {
                    color: 'rgba(255,255,255,0.9)',
                    backgroundColor: 'rgba(255,255,255,0.05)'
                  }
                },
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {collections.map((collection, index) => (
                <Tab 
                  key={collection.id} 
                  label={collection.title} 
                  icon={index === 0 ? <CollectionsIcon /> : null}
                  iconPosition="start"
                />
              ))}
            </Tabs>
          </Box>
        </Box>

        {/* Mostrar la colección seleccionada */}
        {collections.map((collection, tabIndex) => (
          <Box 
            key={collection.id}
            hidden={activeTab !== tabIndex}
            sx={{ display: activeTab === tabIndex ? 'block' : 'none' }}
          >
            <Fade in={activeTab === tabIndex} timeout={500}>
              <Box>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: '600', 
                      mb: 2,
                      color: 'white'
                    }}
                  >
                    {collection.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.7)',
                      maxWidth: '800px',
                      mx: 'auto'
                    }}
                  >
                    {collection.description}
                  </Typography>
                  <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
                </Box>
                
                <Grid container spacing={3}>
                  {collection.images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card 
                        sx={{ 
                          backgroundColor: 'rgba(26, 26, 26, 0.8)',
                          backdropFilter: 'blur(5px)',
                          borderRadius: 3,
                          overflow: 'hidden',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'all 0.3s ease',
                          border: '1px solid rgba(255,255,255,0.05)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                            '& .zoomIcon': {
                              opacity: 1,
                              transform: 'translate(-50%, -50%) scale(1)'
                            },
                            '& .cardMedia': {
                              transform: 'scale(1.05)'
                            }
                          }
                        }}
                        onClick={() => handleOpen(image, index)}
                      >
                        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                          <CardMedia
                            component="img"
                            height="280"
                            image={image.src}
                            alt={image.title}
                            className="cardMedia"
                            sx={{ 
                              objectFit: 'cover',
                              transition: 'transform 0.5s ease'
                            }}
                          />
                          <Box 
                            className="zoomIcon"
                            sx={{ 
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%) scale(0.8)',
                              backgroundColor: 'rgba(0,0,0,0.6)',
                              borderRadius: '50%',
                              width: 50,
                              height: 50,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              opacity: 0,
                              transition: 'all 0.3s ease',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                            }}
                          >
                            <ImageSearchIcon sx={{ color: 'white', fontSize: '1.8rem' }} />
                          </Box>
                        </Box>
                        <CardContent sx={{ flexGrow: 1, py: 3 }}>
                          <Typography 
                            variant="h5" 
                            component="div" 
                            sx={{ 
                              color: 'white',
                              mb: 1.5,
                              fontWeight: 500 
                            }}
                          >
                            {image.title}
                          </Typography>
                          <Typography 
                            variant="body2"
                            sx={{ color: 'rgba(255,255,255,0.7)' }}
                          >
                            {image.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Box>
        ))}

        {/* Modal para ver la imagen en pantalla completa */}
        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.85)'
            }
          }}
        >
          <Fade in={open}>
            <Paper
              elevation={24}
              sx={{
                position: 'relative',
                width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
                maxWidth: '1200px',
                maxHeight: '90vh',
                overflow: 'hidden',
                backgroundColor: 'rgba(12, 12, 12, 0.95)',
                borderRadius: 3,
                p: 0,
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
              }}
            >
              {currentImage && (
                <>
                  <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
                    <Box
                      component="img"
                      src={currentImage.src}
                      alt={currentImage.title}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '80vh',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                    />
                    
                    {/* Navegación de imágenes */}
                    <IconButton
                      onClick={handlePrev}
                      sx={{
                        position: 'absolute',
                        left: 20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(97,218,251,0.7)'
                        }
                      }}
                    >
                      <ArrowBackIosNewIcon />
                    </IconButton>
                    
                    <IconButton
                      onClick={handleNext}
                      sx={{
                        position: 'absolute',
                        right: 20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(97,218,251,0.7)'
                        }
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                    
                    {/* Botón cerrar */}
                    <IconButton
                      onClick={handleClose}
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)'
                        }
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  
                  {/* Información de la imagen */}
                  <Box 
                    sx={{ 
                      p: 3, 
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: 'white', 
                        mb: 1 
                      }}
                    >
                      {currentImage.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255,255,255,0.7)' 
                      }}
                    >
                      {currentImage.description}
                    </Typography>
                  </Box>
                </>
              )}
            </Paper>
          </Fade>
        </Modal>
      </Container>
    </Fade>
  );
};

export default Gallery;