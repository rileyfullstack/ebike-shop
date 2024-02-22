import React from 'react'
import LeftSidebar from '../layout/LeftSidebar'
import { Box } from '@mui/material'
import BikePost from './BikePost'
import useBikePosts from '../../hooks/useBikePosts'
import { useEffect } from 'react'

export default function BikePostPage() {

    const { handleGetBikePosts, bikePosts } = useBikePosts();

    useEffect(() => {handleGetBikePosts()}, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <Box sx={{ width: { xs: '0px', sm: '200px' }, height: '100%', border:'2px solid #555555'}}>
                <LeftSidebar />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                {bikePosts.map((bikePost) => (
                    <BikePost key={bikePost._id} bikePost={bikePost} />
                ))}
            </Box>
        </Box>
    )
}