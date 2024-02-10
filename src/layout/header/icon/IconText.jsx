import React from 'react'
import { Box, Typography } from '@mui/material';

export default function IconText() {
    return (
        <Box>
            <Typography variant="h6" color="textPrimary" fontFamily={'unset'} fontSize={30}>
                <span style={{ color: 'orange' }}>e</span>bikes!com
            </Typography>
        </Box>
    );
}
