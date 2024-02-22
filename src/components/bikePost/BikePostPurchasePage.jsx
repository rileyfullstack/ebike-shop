import { Box, Grid, useTheme } from '@mui/material'
import React from 'react'

export default function BikePostPurchasePage() {

    const theme = useTheme();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fcfcfc',
        }}>
            <Box sx={{
                width: '90vw',
                backgroundColor: theme.palette.white.main,
                height: '100vh',
                boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19)'
            }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <h1>Buy Bike</h1>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
