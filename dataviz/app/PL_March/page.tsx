'use client';
import * as React from 'react'

import Sku_MRP from './Sku_MRP'
import Fixed_Card from '../../components/Fixed_Card'

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
      <Fixed_Card>
        <div>Fixed Card</div>
      </Fixed_Card>


    </div>
    </ThemeProvider>
  )
}
