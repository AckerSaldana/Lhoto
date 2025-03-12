import React, { useState } from 'react';
import { 
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
  Fade,
  Paper,
  Divider,
  Chip,
  useMediaQuery,
  useTheme,
  IconButton
} from '@mui/material';
import { images } from '../data/images';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import OpacityIcon from '@mui/icons-material/Opacity'; // Reemplazo para EcoIcon
import WbTwilightIcon from '@mui/icons-material/WbTwilight';


const Explore = () => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Asignar icono para cada estación
  const getSeasonIcon = (id) => {
    switch(id) {
      case 'invierno':
        return <AcUnitIcon />;
      case 'primavera':
        return <FilterVintageIcon />;
      case 'otono':
        return <OpacityIcon />; // Cambiado de EcoIcon a OpacityIcon
      case 'equinoccio':
        return <WbTwilightIcon />;
      default:
        return <WbSunnyIcon />;
    }
  };

  // Información adicional sobre cada estación
  const seasonInfo = [
    {
      id: 'invierno',
      title: 'Invierno',
      description: 'El invierno trae consigo la senescencia foliar, un proceso natural donde las plantas entran en un estado de reposo. Las temperaturas bajas cambian dramáticamente el paisaje, creando una paleta de colores más tenues y apagados.',
      characteristics: [
        'Temperaturas bajas',
        'Días más cortos',
        'Senescencia vegetal',
        'Tonos apagados'
      ],
      colors: ['#E4EEF2', '#B9D6E2', '#A2BBD0', '#8E9EAE'],
      fact: 'Durante el invierno, algunas plantas han desarrollado la capacidad de generar su propio anticongelante para proteger sus células del daño por congelación.'
    },
    {
      id: 'primavera',
      title: 'Primavera',
      description: 'La primavera marca el renacimiento de la naturaleza, con la explosión de colores vibrantes a medida que las flores comienzan a florecer. Es una época de renovación y crecimiento, donde la vida vegetal cobra protagonismo.',
      characteristics: [
        'Floración abundante',
        'Colores vibrantes',
        'Crecimiento activo',
        'Temperaturas moderadas'
      ],
      colors: ['#366f25', '#e50d06', '#1e260f', '#fc8c29'],
      fact: 'Las plantas florecen en primavera porque detectan cambios en la duración del día, un fenómeno conocido como fotoperiodismo.'
    },
    {
      id: 'otono',
      title: 'Otoño',
      description: 'El otoño es la temporada de transición donde las hojas cambian de color antes de caer. La acumulación de hojas secas en el suelo crea paisajes únicos con una rica paleta de marrones, amarillos y naranjas.',
      characteristics: [
        'Cambio de color en hojas',
        'Acumulación de hojarasca',
        'Tonos cálidos',
        'Preparación para el invierno'
      ],
      colors: ['#F9C74F', '#F8961E', '#F3722C', '#F94144'],
      fact: 'El cambio de color en las hojas ocurre porque la clorofila, que da el color verde, se descompone, revelando otros pigmentos como carotenos y xantofilas.'
    },
    {
      id: 'equinoccio',
      title: 'Equinoccio de otoño',
      description: 'El equinoccio marca el momento exacto de transición entre estaciones. Durante este periodo, podemos observar cómo las hojas comienzan a perder su pigmentación verde, preparándose para los cambios del otoño.',
      characteristics: [
        'Transición gradual',
        'Pérdida de clorofila',
        'Días y noches de igual duración',
        'Cambios sutiles en el ambiente'
      ],
      colors: ['#90BE6D', '#F9C74F', '#F3722C', '#577590'],
      fact: 'Durante el equinoccio, el día y la noche tienen exactamente la misma duración: 12 horas cada uno, en todo el planeta.'
    }
  ];

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Header mejorado con efectos visuales */}
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
            EXPLORA Y APRENDE
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
            Las Estaciones
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
            Descubre más información sobre cada estación del año y las características que las hacen únicas en nuestro entorno.
            Cada cambio estacional trae consigo transformaciones fascinantes en la naturaleza.
          </Typography>
        </Box>

        {/* Tabs mejorados */}
        <Paper
          elevation={0}
          sx={{
            mb: 6,
            backgroundColor: 'rgba(26, 26, 26, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}
        >
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
                py: 3,
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  color: '#61dafb',
                },
                '&:hover': {
                  color: 'rgba(255,255,255,0.9)',
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }
              }
            }}
          >
            {seasonInfo.map((season) => (
              <Tab 
                key={season.id} 
                label={season.title} 
                icon={getSeasonIcon(season.id)} 
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Paper>

        {/* Contenido de la estación seleccionada con diseño mejorado */}
        {seasonInfo.map((season, index) => (
          <Box 
            key={season.id}
            role="tabpanel"
            hidden={activeTab !== index}
            id={`tabpanel-${season.id}`}
            aria-labelledby={`tab-${season.id}`}
          >
            {activeTab === index && (
              <Fade in={activeTab === index} timeout={500}>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 6,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: '0 20px 80px rgba(0,0,0,0.3)'
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                      <Box 
                        sx={{ 
                          position: 'relative',
                          height: '100%',
                          minHeight: { xs: '350px', md: '100%' },
                          overflow: 'hidden'
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={images[index].src}
                          alt={season.title}
                          sx={{ 
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                              transform: 'scale(1.05)'
                            }
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: 3,
                            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))'
                          }}
                        >
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
                            ESTACIÓN
                          </Typography>
                          <Typography 
                            variant="h4" 
                            sx={{ 
                              color: 'white', 
                              fontWeight: '600', 
                              mb: 1,
                              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                            }}
                          >
                            {season.title}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Box 
                        sx={{ 
                          p: { xs: 4, md: 5 },
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        <Typography 
                          variant="h3" 
                          sx={{ 
                            color: 'white',
                            mb: 1,
                            fontWeight: 600,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                          }}
                        >
                          {season.title}
                          <Box 
                            sx={{ 
                              color: season.colors[3],
                              display: { xs: 'none', sm: 'block' }
                            }}
                          >
                            {getSeasonIcon(season.id)}
                          </Box>
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {season.colors.map((color, i) => (
                            <Box 
                              key={i}
                              sx={{
                                width: 30,
                                height: 30,
                                borderRadius: '50%',
                                backgroundColor: color,
                                boxShadow: `0 3px 5px rgba(0,0,0,0.2)`,
                                border: '2px solid rgba(255,255,255,0.1)'
                              }}
                            />
                          ))}
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.6)',
                              alignSelf: 'center',
                              ml: 1
                            }}
                          >
                            Paleta de colores
                          </Typography>
                        </Box>
                        
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.8)',
                            mb: 4,
                            lineHeight: 1.8,
                            fontSize: '1.05rem'
                          }}
                        >
                          {season.description}
                        </Typography>
                        
                        <Box 
                          sx={{
                            mb: 4,
                            p: 3,
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            borderRadius: 2,
                            border: '1px solid rgba(255,255,255,0.05)'
                          }}
                        >
                          <Typography 
                            variant="subtitle1"
                            sx={{ 
                              color: '#61dafb',
                              fontWeight: 500,
                              mb: 1,
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <WbSunnyIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
                            ¿Sabías que?
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.7)',
                              fontStyle: 'italic'
                            }}
                          >
                            {season.fact}
                          </Typography>
                        </Box>
                        
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: 'white',
                            mb: 2,
                            fontWeight: 500,
                            position: 'relative',
                            display: 'inline-block',
                            '&:after': {
                              content: '""',
                              position: 'absolute',
                              width: '30px',
                              height: '2px',
                              backgroundColor: '#61dafb',
                              bottom: '-5px',
                              left: '0'
                            }
                          }}
                        >
                          Características principales
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {season.characteristics.map((item, idx) => (
                            <Chip
                              key={idx}
                              label={item}
                              sx={{
                                backgroundColor: 'rgba(97,218,251,0.1)',
                                color: 'rgba(255,255,255,0.9)',
                                border: '1px solid rgba(97,218,251,0.3)',
                                my: 0.5
                              }}
                            />
                          ))}
                        </Box>
                        
                        {/* Navegación entre estaciones */}
                        <Box 
                          sx={{ 
                            mt: 'auto', 
                            display: 'flex', 
                            justifyContent: 'space-between',
                            pt: 3,
                            borderTop: '1px solid rgba(255,255,255,0.1)'
                          }}
                        >
                          <Typography 
                            variant="body2" 
                            sx={{ color: 'rgba(255,255,255,0.5)' }}
                          >
                            {`Estación ${index + 1} de ${seasonInfo.length}`}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: '#61dafb',
                                mr: 1,
                                cursor: 'pointer',
                                '&:hover': { textDecoration: 'underline' }
                              }}
                              onClick={() => setActiveTab((index + 1) % seasonInfo.length)}
                            >
                              Siguiente estación
                            </Typography>
                            <IconButton 
                              size="small"
                              sx={{ 
                                color: '#61dafb',
                                backgroundColor: 'rgba(97,218,251,0.1)',
                                '&:hover': { backgroundColor: 'rgba(97,218,251,0.2)' } 
                              }}
                              onClick={() => setActiveTab((index + 1) % seasonInfo.length)}
                            >
                              <ArrowForwardIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Fade>
            )}
          </Box>
        ))}
      </Container>
    </Fade>
  );
};

export default Explore;