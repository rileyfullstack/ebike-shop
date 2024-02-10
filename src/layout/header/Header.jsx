import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import BikeAppIcon from './icon/BikeAppIcon';

export default function Header() {
    return (
        <AppBar 
        position="sticky"
        sx={{ 
            backgroundColor: 'rgb(238, 244, 212)',
        }}
        >
            <Toolbar sx={{height: '16vh', }}>
                <BikeAppIcon/>
            </Toolbar>
        </AppBar>
    );
}
