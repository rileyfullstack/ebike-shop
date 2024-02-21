import React from 'react';
import { Box, Button } from '@mui/material';
import ElectricBikeIconTwoTone from '@mui/icons-material/ElectricBikeTwoTone';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routesModel';

export default function BikeAppIcon() {

  const navigate = useNavigate();

  const handleBikeAppIconClick = () => {
    navigate(ROUTES.HOME);
  }

  return (
    <Button component={Box} width={'45px'} height={'45px'} onClick={() => handleBikeAppIconClick()}
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
      <ElectricBikeIconTwoTone sx={{ fontSize: 34}} color='white'/>
    </Button>
  )
}
