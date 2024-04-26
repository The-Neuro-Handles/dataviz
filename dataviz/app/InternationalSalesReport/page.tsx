'use client';
import * as React from 'react'

import Fixed_Card from '../../components/Fixed_Card'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import BasicLineChart from './Int_lineplot';
import HorizontalBars from './Int_barchart';
import BasicPie from './Int_piechart';
import StackedBarChart from './Int_stackedbarchart';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function InternationalSalesReport() {
  return (
    <ThemeProvider theme={theme}>
      {/* InternationalSalesReport */}
    <div className='flex w-full p-5 grid grid-cols-2 gap-4'>
      
        <BasicLineChart />
      
        <HorizontalBars />
      
        <BasicPie />
      
        <StackedBarChart />
      
      
      {/* <Fixed_Card>
      <iframe src="https://vizhub.com/porallapradhyumna/c4fff342ebe64159a1f8fa74de95278d?mode=embed" width={600} height={400} style={{background:'transparent'}} ></iframe>
      </Fixed_Card> */}


    </div>
    </ThemeProvider>
  )
}
