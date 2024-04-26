'use client';
import * as React from 'react'
import Card from '@mui/joy/Card';
import * as d3 from "d3";
import Typography from '@mui/joy/Typography';

import { BarChart } from '@mui/x-charts/BarChart';
import Fixed_Card from '@/components/Fixed_Card';
import plot_settings from '@/components/Plot_Settings';


const data = {
  "2XL": { "Breeze-4": 6.0, "Colors-7": 7.0, "Colors-8": 8.0, "Four Gems 2": 4.0, "Mix": 124.0, "Moments": 6.0, "Rozana": 8.0, "Surmaya": 32.0 },
  "2XLL": { "Breeze-4": 0.0, "Colors-7": 0.0, "Colors-8": 0.0, "Four Gems 2": 0.0, "Mix": 1.0, "Moments": 0.0, "Rozana": 0.0, "Surmaya": 0.0 },
  "3XL": { "Breeze-4": 6.0, "Colors-7": 7.0, "Colors-8": 8.0, "Four Gems 2": 4.0, "Mix": 120.0, "Moments": 6.0, "Rozana": 8.0, "Surmaya": 32.0 },
  "L": { "Breeze-4": 6.0, "Colors-7": 7.0, "Colors-8": 8.0, "Four Gems 2": 4.0, "Mix": 135.0, "Moments": 6.0, "Rozana": 8.0, "Surmaya": 32.0 },
  "M": { "Breeze-4": 6.0, "Colors-7": 7.0, "Colors-8": 8.0, "Four Gems 2": 4.0, "Mix": 134.0, "Moments": 6.0, "Rozana": 8.0, "Surmaya": 32.0 },
  "MM": { "Breeze-4": 0.0, "Colors-7": 0.0, "Colors-8": 0.0, "Four Gems 2": 0.0, "Mix": 1.0, "Moments": 0.0, "Rozana": 0.0, "Surmaya": 0.0 },
  "S": { "Breeze-4": 6.0, "Colors-7": 7.0, "Colors-8": 8.0, "Four Gems 2": 4.0, "Mix": 132.0, "Moments": 6.0, "Rozana": 8.0, "Surmaya": 32.0 },
  "XL": { "Breeze-4": 6.0, "Colors-7": 7.0, "Colors-8": 8.0, "Four Gems 2": 4.0, "Mix": 133.0, "Moments": 6.0, "Rozana": 8.0, "Surmaya": 32.0 },
  "XS": { "Breeze-4": 0.0, "Colors-7": 1.0, "Colors-8": 0.0, "Four Gems 2": 0.0, "Mix": 14.0, "Moments": 0.0, "Rozana": 0.0, "Surmaya": 0.0 }
};


const series = [];
const xAxis = [{ data: [], scaleType: 'band', id: 'axis1' }];

// Extract data for series
Object.entries(data).forEach(([sku, values], index) => {
  const dataValues = Object.values(values);
  series.push({
    id: `series-${index + 1}`,
    data: dataValues,
    label: sku,
  });
});

// Extract xAxis data
const categories = Object.keys(data);
xAxis[0].data = categories//.map((_, index) => String(index * 3));

const formattedData = {
  series,
  xAxis,
  height: 400,
};






export default function Sku_MRP() {
 
  //console.log("some",formattedData);
  const [itemData, setItemData] = React.useState(null);

 
  return (
    <Fixed_Card>
        <Typography level="h6" component="h6">
          SKU vs MRP
        </Typography>
        
        <BarChart
        {...formattedData}
        onItemClick={(event, d) => setItemData(d)}
        onAxisClick={(event, d) => setAxisData(d)}
        colors={plot_settings.colors}
        ></BarChart>
    </Fixed_Card>
  )
}
