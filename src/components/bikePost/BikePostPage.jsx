import React from 'react'
import LeftSidebar from '../layout/LeftSidebar'
import { Box } from '@mui/material'
import BikePost from './BikePost'

export default function BikePostPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <Box sx={{ width: { xs: '0px', sm: '200px' }, height: '100%', backgroundColor: 'black' }}>
                <LeftSidebar />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <BikePost />
            </Box>
        </Box>
    )
}