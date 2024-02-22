import { Box, Grid, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import useBikePosts from '../../hooks/useBikePosts';
import { useParams } from 'react-router-dom';


export default function BikePostPurchasePage() {

    const theme = useTheme();
    const id = useParams().id;
    const { handleGetBikePostById, bikePosts } = useBikePosts();

    useEffect(() => {
        handleGetBikePostById(id);
    }, [id]);

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
                <Grid container sx={{ height: "100%" }}>
                    <Grid item xs={6} >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: "100%",
                            backgroundColor: 'red'
                        }}>
                            <h1>{bikePosts[0]?.title}</h1>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
