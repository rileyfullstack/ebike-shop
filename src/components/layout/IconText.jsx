import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';

export default function IconText() {

    const theme = useTheme();

    return (
        <Box>
            <Typography variant="h6" color="textPrimary" fontFamily={'unset'} fontSize={30}>
                <span style={{ color: theme.palette.primary.main }}>e</span>bikes!com
            </Typography>
        </Box>
    );
}
