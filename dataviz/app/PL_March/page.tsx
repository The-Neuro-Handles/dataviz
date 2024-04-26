'use client';
import * as React from 'react'

import Sku_MRP from './Sku_MRP'
import Fixed_Card from '../../components/Fixed_Card'
import Tree_Example from './Tree_Example'
import Hist_Weight from './Hist_Weight'
import Scatter_TPs from './Scatter_TPs'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function PL_March() {
  return (
    <ThemeProvider theme={theme}>
    <div className='w-full p-5 grid grid-cols-1 gap-4'>
      <Sku_MRP />  
        
      <Tree_Example />

      <Hist_Weight/>

      <Scatter_TPs />
    </div>
    </ThemeProvider>
  )
}
