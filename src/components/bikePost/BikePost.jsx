import { Card, Divider, Box } from '@mui/material';
import React from 'react';
import BikeImage from './BikeImage';
import BikePostContent from './BikePostContent';

export default function BikePost({ bikePost }) {
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
                <BikeImage bikePost={bikePost} />
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
                <BikePostContent bikePostPrice={bikePost.Price} bikePostTitle={bikePost.Title} bikePostShippingPrice={bikePost.ShippingPrice}/>
            </Box>
        </Card>
    );
}
