import React from 'react'
import LeftSidebar from '../layout/LeftSidebar'
import { Box } from '@mui/material'
import BikePost from './BikePost'
import sellPost from '../../mockData/mokeSalePosts'
export default function BikePostPage() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <Box sx={{ width: { xs: '0px', sm: '200px' }, height: '100%', border:'2px solid #555555'}}>
                <LeftSidebar />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <BikePost bikePost={sellPost} />
            </Box>
        </Box>
    )
}