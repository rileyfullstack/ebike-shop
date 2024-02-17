import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import IconWrapper from '../components/layout/IconWrapper';


export default function Header() {

    return (
        <AppBar
            position="sticky"
            color='secondary'
        >
            <Toolbar sx={{ height: '20vh', }}>
                <IconWrapper />
            </Toolbar>
        </AppBar>
    );
}
