import { CardMedia, Box } from '@mui/material'
import React from 'react'

export default function BikeImage({Image}) {
  return (
      <Box sx={{ width: '25%', height: '100%' }}> {/* Container to control width and height */}
        <CardMedia
            component="img"
            image={Image.url}
            alt={Image.alt}
            sx={{ width: '100%', height: '100%' }} // Make image fully fill the container
        />
      </Box>
  );
}
