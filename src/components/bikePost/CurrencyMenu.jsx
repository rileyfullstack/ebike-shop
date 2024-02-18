import { Button, Menu, MenuItem, Box, useTheme } from '@mui/material';
import * as React from 'react'

export default function CurrencyMenu() {

    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{backgroundColor: theme.palette.primary.main }}>
            <Button
                id="currency-menu-button"
                aria-controls={open ? 'currency-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ width: '100%', height: '50px', fontSize: '20px' }}
                color='white'
            >
                Currency
            </Button>
            <Menu
                id="currency-menu"
                aria-labelledby="currency-menu-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    style: {
                        marginLeft: '-12px', // Adjust this value as needed to align with the button's far left
                    },
                }}
                sx={{
                    '& .MuiMenuItem-root': {
                        fontSize: '13px', 
                    },
                }}
            >
                <MenuItem onClick={handleClose}>$USD (United States Dollar)</MenuItem>
                <MenuItem onClick={handleClose}>€EUR (Euro)</MenuItem>
                <MenuItem onClick={handleClose}>₪NIS (Israeli New Shekel)</MenuItem>
            </Menu>
        </Box>
    )
}
