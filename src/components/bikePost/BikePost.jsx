import { Card } from '@mui/material'
import React from 'react'
import BikeImage from './BikeImage';

export default function BikePost({ bikePost }) {

    //const image = { url: bikePost?.image?.url, alt: bikePost?.image?.alt };
    const image = { url: 'https://media.wired.com/photos/64c1a027a6c1fece8f4bb578/191:100/w_2580,c_limit/Aventon-Abound-Gear.jpg', alt: 'bike' };

    return (
        <Card sx={{ backgroundColor: 'lightGray', width: '100%', height: '200px', flexDirection: 'column' }}>
            <BikeImage Image={image} />
        </Card>
    )
}
