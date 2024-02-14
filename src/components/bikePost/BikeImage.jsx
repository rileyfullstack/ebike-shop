import { CardMedia, Box, CardActionArea } from '@mui/material';
import React from 'react';

export default function BikeImage({ Image }) {
    return (
        <Box sx={{ 
            width: '240px', 
            height: '240px',
            overflow: 'hidden', 
            borderRadius: '12px', 
            paddingLeft: '15px'
        }}>
            <CardActionArea sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    image={Image.url}
                    alt={Image.alt}
                    sx={{ 
                        width: '100%', 
                        height: '100%',
                        borderRadius: '12px'
                    }} 
                />
            </CardActionArea>
        </Box>
    );
}
