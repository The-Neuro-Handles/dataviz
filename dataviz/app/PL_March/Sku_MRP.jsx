'use client';
import * as React from 'react'
import Card from '@mui/joy/Card';
import * as d3 from "d3";


import { BarChart } from '@mui/x-charts/BarChart';


const barChartsParams = {
    series: [
      {
        id: 'series-1',
        data: [3, 4, 1, 6, 5],
        label: 'A',
        stack: 'total',
        highlightScope: {
          highlighted: 'item',
        },
      },
      {
        id: 'series-2',
        data: [4, 3, 1, 5, 8],
        label: 'B',
        stack: 'total',
        highlightScope: {
          highlighted: 'item',
        },
      },
      {
        id: 'series-3',
        data: [4, 2, 5, 4, 1],
        label: 'C',
        highlightScope: {
          highlighted: 'item',
        },
      },
    ],
    xAxis: [{ data: ['0', '3', '6', '9', '12'], scaleType: 'band', id: 'axis1' }],
    height: 400,
  };


export default function Sku_MRP() {
  const [sku,setSku] = React.useState([]);

 
  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        // to make the demo resizable
        //overflow: 'auto',
        //resize: 'both',
        //'--icon-size': '100px',
      }}
    >
        <h1>SKU MRP</h1>
        
        <BarChart
        {...barChartsParams}
        onItemClick={(event, d) => setItemData(d)}
        onAxisClick={(event, d) => setAxisData(d)}
        ></BarChart>
    </Card>
  )
}
