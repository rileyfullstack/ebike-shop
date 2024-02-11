import React, { Children } from 'react'
import Header from './Header'
import { Box } from '@mui/material';

export default function Layout() {
  return (
    <Box>
      <Header />
      <Children />
    </Box>
  )
}
