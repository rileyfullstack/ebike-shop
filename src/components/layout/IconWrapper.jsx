import React from 'react'
import BikeAppIcon from './BikeAppIcon'
import IconText from './IconText'
import { Box } from '@mui/material';
import IconSecondryText from './IconSecondryText';

export default function IconWrapper() {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        mb: '0.5vh'
      }}>
        <BikeAppIcon />
        <IconText />
      </Box>
      <Box>
        <IconSecondryText />
      </Box>
    </Box>
  )
}
