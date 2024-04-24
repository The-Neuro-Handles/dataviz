'use client';
import * as React from 'react'
import Amazon_Linear_Plot from './Amazon_Linear_Plot'
import Amazon_PieChart from './Amazon_PieChart'
import Amazon_BarPlot from './Amazon_BarPlot'
import Amazon_StackedBarPlot from './Amazon_StackedBarPlot'

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Amazon_Sales() {
  return (

    <ThemeProvider theme={theme}>
      <div className='w-full p-5 grid grid-cols-2 gap-4'>
       
      <Amazon_Linear_Plot/>
      <Amazon_PieChart/>

      <Amazon_BarPlot/>  
      <Amazon_StackedBarPlot/> 

      </div>     
    </ThemeProvider>
  )
}
