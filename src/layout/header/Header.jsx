import React from 'react'
import { AppBar, Icon, Toolbar, Typography } from '@mui/material';
import IconWrapper from './icon/IconWrapper';

export default function Header() {
    return (
        <AppBar 
        position="sticky"
        sx={{ 
            backgroundColor: 'rgb(238, 244, 212)',
        }}
        >
            <Toolbar sx={{height: '20vh', }}>
                <IconWrapper/>
            </Toolbar>
        </AppBar>
    );
}
