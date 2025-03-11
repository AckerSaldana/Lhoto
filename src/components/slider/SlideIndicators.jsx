import React from 'react';
import { Box } from '@mui/material';

const SlideIndicators = ({ count, current, onChange }) => {
  return (
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
      {Array.from({ length: count }).map((_, index) => (
        <Box 
          key={index}
          onClick={() => onChange(index)}
          sx={{
            width: 30,
            height: 4,
            borderRadius: 2,
            mx: 0.5,
            bgcolor: index === current ? 'white' : 'rgba(255, 255, 255, 0.4)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        />
      ))}
    </Box>
  );
};

export default SlideIndicators;