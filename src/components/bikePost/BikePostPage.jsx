import React from 'react'
import LeftSidebar from '../layout/LeftSidebar'
import { Box } from '@mui/material'

export default function BikePostPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Box sx={{ width: '250px', height: '100%', backgroundColor: 'black' }}>
                <LeftSidebar />
            </Box>
        </Box>
    )
}
