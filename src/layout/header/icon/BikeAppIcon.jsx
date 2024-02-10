import React from 'react'
import ElectricBikeIconTwoTone from '@mui/icons-material/ElectricBikeTwoTone';
import { Box } from '@mui/material';

export default function BikeAppIcon() {
  return (
    <Box width={'45px'} height={'45px'} 
    sx={{bgcolor: 'orange', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: '8px',
    }}>
        <ElectricBikeIconTwoTone sx={{fontSize: 34}}/>
    </Box>
  )
}
