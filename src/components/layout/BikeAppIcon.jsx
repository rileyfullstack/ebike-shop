import React from 'react';
import { Box, Button } from '@mui/material';
import ElectricBikeIconTwoTone from '@mui/icons-material/ElectricBikeTwoTone';

export default function BikeAppIcon() {
  return (
    <Button component={Box} width={'45px'} height={'45px'}
      sx={{
        bgcolor: 'orange',
        '&:hover': {
          bgcolor: 'rgba(255, 165, 0, 0.85)', // Slightly lighter orange on hover
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
      }}>
      <ElectricBikeIconTwoTone sx={{ fontSize: 34, color: 'white' }} />
    </Button>
  )
}
