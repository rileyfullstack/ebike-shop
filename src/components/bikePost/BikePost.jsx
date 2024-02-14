import { Card, CardActionArea } from '@mui/material'
import React from 'react'
import BikeImage from './BikeImage';

export default function BikePost({ bikePost }) {

    //example image until I can import it from the bike post.
    const image = { url: 'https://media.wired.com/photos/64c1a027a6c1fece8f4bb578/191:100/w_2580,c_limit/Aventon-Abound-Gear.jpg', alt: 'bike' };

    return (
        <Card sx={{
            backgroundColor: '#f5f5f5',
            width: '100%',
            height: '270px',
            flexDirection: 'column',
            border: '2px solid black',
            borderRadius: '0'
        }}>
            <BikeImage Image={image} />
        </Card>
    )
}