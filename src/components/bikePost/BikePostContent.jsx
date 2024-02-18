import { Typography, useTheme } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import { useCurrency } from '../providers/CurrencyProvider';

export default function BikePostContent({ bikePostPrice, bikePostTitle, bikePostShippingPrice }) {

    const theme = useTheme();
    const { calculatePriceByCurrency, currencyType } = useCurrency();

    // Function to capitalize the first letter of each word
    const titleCase = (str) => {
        return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    // Function to break text into lines with a maximum length of 50 characters
    const breakTextIntoLines = (text, maxLength = 50) => {
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            if ((currentLine + ' ' + words[i]).length > maxLength) {
                lines.push(currentLine);
                currentLine = words[i];
            } else {
                currentLine += ' ' + words[i];
            }
        }

        lines.push(currentLine); // Push the last line
        return lines;
    };

    // Convert the title into title case and then into lines
    const titleLines = breakTextIntoLines(titleCase(bikePostTitle));

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', marginLeft: "20px" }}>
                <Box sx={{ marginTop: "40px" }}>
                    {titleLines.map((line, index) => (
                        <Typography key={index} variant='h4' fontSize={"15px"} sx={{ paddingTop: "10px" }}>
                            {line}
                        </Typography>
                    ))}
                </Box>
                <Typography variant='h4' fontSize={"50px"} sx={{ paddingTop: "20px" }}>
                    <Box component="span" sx={{ color: theme.palette.primary.main }} fontSize={"20px"}>{currencyType}</Box>
                    {calculatePriceByCurrency(bikePostPrice)}
                </Typography>
                <Typography variant='h4' fontSize={"15px"}>
                    Shipping price: <Box component="span" sx={{ color: theme.palette.primary.main, marginRight: '-2px', marginLeft: '2px' }} fontSize={"10px"}>{currencyType}</Box> {calculatePriceByCurrency(bikePostShippingPrice)}
                </Typography>
            </Box>
        </>
    );
}
