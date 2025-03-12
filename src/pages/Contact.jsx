import React, { useState } from 'react';
import { 
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Fade
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Aquí irá la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Mostrar mensaje de éxito
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="overline"
            sx={{
              letterSpacing: 4,
              color: 'rgba(255,255,255,0.7)',
              mb: 2,
              fontSize: '0.9rem',
              display: 'block'
            }}
          >
            PONTE EN CONTACTO
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: '600', 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              letterSpacing: 1,
              color: 'white'
            }}
          >
            Contáctanos
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
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            ¿Tienes alguna pregunta o estás interesado en adquirir alguna fotografía? Completa el formulario y nos pondremos en contacto contigo.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{ 
                backgroundColor: '#1a1a1a',
                p: 4,
                borderRadius: 4
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,255,255,0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#61dafb',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255,255,255,0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,255,255,0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#61dafb',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255,255,255,0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,255,255,0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#61dafb',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255,255,255,0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,255,255,0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#61dafb',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255,255,255,0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ 
                      py: 1.5,
                      backgroundColor: '#61dafb',
                      color: '#0c0c0c',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: '#4dc0ed',
                      }
                    }}
                  >
                    Enviar Mensaje
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ height: '100%' }}>
              <Paper 
                elevation={0}
                sx={{ 
                  backgroundColor: '#1a1a1a',
                  p: 4,
                  borderRadius: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'white',
                    mb: 4,
                    fontWeight: 500,
                    textAlign: 'center'
                  }}
                >
                  Información de Contacto
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <EmailIcon sx={{ color: '#61dafb', mr: 2 }} />
                  <Typography 
                    variant="body1" 
                    sx={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    contacto@photo-gallery.com
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ color: '#61dafb', mr: 2 }} />
                  <Typography 
                    variant="body1" 
                    sx={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    +34 123 456 789
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ color: '#61dafb', mr: 2 }} />
                  <Typography 
                    variant="body1" 
                    sx={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    Calle Principal 123, Ciudad
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        
        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity="success" 
            variant="filled"
            sx={{ width: '100%' }}
          >
            ¡Mensaje enviado con éxito! Te responderemos lo antes posible.
          </Alert>
        </Snackbar>
      </Container>
    </Fade>
  );
};

export default Contact;