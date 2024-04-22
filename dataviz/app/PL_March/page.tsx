'use client';
import * as React from 'react'

import Sku_MRP from './Sku_MRP'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function PL_March() {
  return (
    <ThemeProvider theme={theme}>
    <div className='p-5'>
      PL_MARCH

      <Sku_MRP />

    </div>
    </ThemeProvider>
  )
}
