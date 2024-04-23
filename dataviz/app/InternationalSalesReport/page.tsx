'use client';
import * as React from 'react'

import Fixed_Card from '../../components/Fixed_Card'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import BasicLineChart from './Int_lineplot';
import HorizontalBars from './Int_barchart';
import DynamicPieChart from './Int_piechart';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function InternationalSalesReport() {
  return (
    <ThemeProvider theme={theme}>
    <div className='p-5'>
    InternationalSalesReport
      
      <Fixed_Card>
        <div><BasicLineChart /></div>
      </Fixed_Card>

      <Fixed_Card>
        <div><HorizontalBars /></div>
      </Fixed_Card>

      <Fixed_Card>
        <div><DynamicPieChart /></div>
      </Fixed_Card>
    </div>
    </ThemeProvider>
  )
}
