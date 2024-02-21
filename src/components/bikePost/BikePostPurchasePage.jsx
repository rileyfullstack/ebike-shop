import { Box, useTheme } from '@mui/material'
import React from 'react'

export default function BikePostPurchasePage() {

    const theme = useTheme();
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',                 backgroundColor: '#fcfcfc',
    }}>
            <Box sx={{
                width: '90vw',
                backgroundColor: theme.palette.white.main,
                height: '100vh',
                boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19)'
            }}>
                <h1>Test</h1>
            </Box>
        </Box>
    )
}
