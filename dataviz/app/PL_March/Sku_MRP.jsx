'use client';
import * as React from 'react'
import Card from '@mui/joy/Card';
import * as d3 from "d3";


import { BarChart } from '@mui/x-charts/BarChart';
import Fixed_Card from '@/components/Fixed_Card';


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
  React.useEffect(() => { 
    d3.csv("https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/pp_data_preprocessing/cleaned_dataset/PLMarch_Data/Sku_Catalog.csv").then(function(data) {
        const cols = Object.keys(data[0]).filter(key => key !== 'Sku');
        const fin = {}
        data.forEach(obj => {
          fin[obj.Sku] = []
          cols.forEach(col => {
            fin[obj.Sku].push(obj[col])
          });
        })
        setSku(fin);
    });
  }, []);
  console.log(sku)

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
 
  return (
    <Fixed_Card>
        <h1>SKU MRP</h1>
        
        <BarChart
        {...barChartsParams}
        onItemClick={(event, d) => setItemData(d)}
        onAxisClick={(event, d) => setAxisData(d)}
        ></BarChart>
    </Fixed_Card>
  )
}
