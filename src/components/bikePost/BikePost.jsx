import { Card, Divider, Box } from '@mui/material';
import React from 'react';
import BikeImage from './BikeImage';

export default function BikePost({ bikePost }) {
    const image = {
        url: 'https://media.wired.com/photos/64c1a027a6c1fece8f4bb578/191:100/w_2580,c_limit/Aventon-Abound-Gear.jpg',
        alt: 'bike'
    };

    return (
        <Card sx={{
            backgroundColor: '#f5f5f5',
            width: '100%',
            height: '270px',
            flexDirection: 'column',
            border: '2px solid #555555',
            borderRadius: '0',
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                <BikeImage Image={image} />
                <Divider
                    orientation="vertical"
                    variant='middle'
                    flexItem
                    sx={{
                        marginLeft:
                            '10px',
                        marginRight:
                            '10px',
                        borderRightWidth: '1px',
                        borderRightStyle: 'solid',
                        borderLeftWidth: '1px',
                        borderLeftStyle: 'solid',
                        borderColor: 'black',
                        borderRadius: '10px',
                    }} />
            </Box>
        </Card>
    );
}
