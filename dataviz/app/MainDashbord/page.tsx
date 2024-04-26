'use client';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Amazon_Linear_Plot from '../Amazon_Sales/Amazon_Linear_Plot';
import Amazon_PieChart from '../Amazon_Sales/Amazon_PieChart';
import Amazon_BarPlot from '../Amazon_Sales/Amazon_BarPlot';
import Amazon_StackedBarPlot from '../Amazon_Sales/Amazon_StackedBarPlot';
import Typography from '@mui/joy/Typography';


import BasicLineChart from '../InternationalSalesReport/Int_barchart';
import HorizontalBars from '../InternationalSalesReport/Int_barchart';
import BasicPie from '../InternationalSalesReport/Int_piechart';
import StackedBarChart from '../InternationalSalesReport/Int_stackedbarchart'

import Sku_MRP from '../PL_March/Sku_MRP'
import Tree_Example from '../PL_March/Tree_Example'
import Hist_Weight from '../PL_March/Hist_Weight'
import Scatter_TPs from '../PL_March/Scatter_TPs'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function MainDashbord() {
  return (
    <ThemeProvider theme={theme}>
      
      {/* <Divider orientation="horizontal" flexItem />
      <Typography variant="h6" gutterBottom>Amazon Sales</Typography> */}
      <div className='w-full p-5 gap-4 justify-center items-center'>
        {/* <Divider orientation="horizontal" flexItem /> */}
        <Typography level="h2">Amazon Sales</Typography>
        {/* <Divider orientation="horizontal" flexItem /> */}
        <div className='w-full p-5 grid grid-cols-2 gap-4'>
          <Amazon_Linear_Plot/>
          <Amazon_PieChart/>

          <Amazon_BarPlot/>  
          <Amazon_StackedBarPlot/> 
        </div>
        
        {/* <Divider orientation="horizontal" flexItem /> */}
        <Typography level="h2">International Sales</Typography>
        {/* <Divider orientation="horizontal" flexItem /> */}
        <div className='w-full p-5 grid grid-cols-2 gap-4'>
          <BasicLineChart />
          
          <HorizontalBars />
          
          <BasicPie />
          
          <StackedBarChart />
        </div>


        {/* <Divider orientation="horizontal" flexItem /> */}
        <Typography level="h2">PL March</Typography>
        {/* <Divider orientation="horizontal" flexItem /> */}
        <div className='w-full p-5 grid grid-cols-1 gap-4'>
          <Sku_MRP />  
          
          <Tree_Example />
    
          <Hist_Weight/>
    
          <Scatter_TPs />
        </div>

      </div>     
      
    </ThemeProvider>
  )
}

export default MainDashbord