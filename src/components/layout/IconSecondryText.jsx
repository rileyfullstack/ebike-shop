import React from 'react'
import { Typography } from '@mui/material';

export default function IconSecondryText() {
  return (
    <Typography
      variant="h6"
      color="textPrimary"
      fontFamily={'unset'}
      fontSize={12}
      sx={{ pl: '0.2vw' }}>
      <span style={{ color: 'orange' }}>Your next advanture starts</span><strong> here</strong>
    </Typography>
  )
}
