import { CardMedia, Box, CardActionArea } from '@mui/material'
import React from 'react'

export default function BikeImage({ Image }) {
    return (

        //For some reason all of them need 100% height to fill the container. Don't ask me why. Just keep it that way.
        <Box sx={{ width: '240px', height: '240px' }}> {/* Container to control width and height */}
            <CardActionArea sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    image={Image.url}
                    alt={Image.alt}
                    sx={{ width: '100%', height: '100%'}} // Make image fully fill the container
                />
            </CardActionArea>
        </Box>
    );
}