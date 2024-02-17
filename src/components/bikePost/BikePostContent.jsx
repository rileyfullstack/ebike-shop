import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'

export default function BikePostContent({ bikePostPrice, bikePostTitle, bikePostShippingPrice }) {

    // Function to capitalize the first letter of each word
    const titleCase = (str) => {
        return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', marginLeft:"20px"}}>
                <Typography variant='h4' fontSize={"22px"} sx={{paddingTop:"10%"}}>{titleCase(bikePostTitle)}</Typography>
                <Typography variant='h4' fontSize={"50px"} sx={{ paddingTop: "10%" }}>
                    <Box component="span" sx={{ color: 'orange' }} fontSize={"20px"}>$USD</Box>
                    {bikePostPrice}
                </Typography>
                <Typography variant='h4' fontSize={"15px"} sx={{  }}>
                    Shipping price: <Box component="span" sx={{ color: 'orange', marginRight:'-2px', marginLeft:'2px'}} fontSize={"10px"}>$USD</Box> {bikePostShippingPrice}
                    </Typography>
            </Box>
        </>
    )
}
