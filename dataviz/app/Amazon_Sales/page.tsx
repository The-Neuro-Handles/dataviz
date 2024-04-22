'use client';
import * as React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Amazon_Sales() {
  return (
    <ThemeProvider theme={theme}>
    <div className='p-5'> 
        Amazon_Sales
       </div>
    </ThemeProvider>
  )
}
