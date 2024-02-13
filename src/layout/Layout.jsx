import React from 'react'
import Header from './Header'
import { Box } from '@mui/material';

export default function Layout(props) {
  return (
    <Box>
      <Header />
      {props.children}
    </Box>
  )
}
