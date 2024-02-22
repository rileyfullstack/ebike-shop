import { CardMedia, Box, CardActionArea } from '@mui/material';
import React from 'react';

export default function BikeImage({ Image, imageSize }) {
    return (
        <Box sx={{
            width: `${imageSize}px`, 
            height: `${imageSize}px`,
            overflow: 'hidden',
            borderRadius: '12px',
            paddingLeft: '15px'
        }}>
            <CardActionArea sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    image={Image?.Url}
                    alt={Image.Alt}
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
