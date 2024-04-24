'use client';
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const chartSetting = {
  yAxis: [
    {
      label: 'Gross amount for every size',
    },
  ],
 // Adjusted height to fit the chart properly
};

export default function StackedBarChart() {
  // Provided data
  const data = {
    "AANCHOL": {
        "L": 3818.0,
        "XL": 1272.0,
        "XXL": 3181.0,
        "XXXL": 3181.0
    },
    "ABBI COLLECTION ": {
        "L": 9890.0,
        "M": 2404.0,
        "XL": 2550.0,
        "XS": 1728.0,
        "XXL": 13288.0,
        "XXXL": 7254.0
    },
    "ABDUL RAHMAN(SINGAPORE)": {
        "L": 16086.0,
        "XL": 14710.0,
        "XXL": 16010.0,
        "XXXL": 1300.0
    },
    "ADDVEN SOLUTIONS PRIVATE LIMITED": {
        "L": 18538.0,
        "XS": 13690.0
    },
    "AKASH KAUSHAL": {
        "L": 574.0,
        "M": 1091.0,
        "S": 2212.0,
        "XL": 649.0,
        "XXXL": 1054.0
    },
    "ALAMELOO(MALA)": {
        "4XL": 1476.0,
        "L": 15060.0,
        "M": 5314.0,
        "S": 3850.0,
        "XL": 25993.0,
        "XXL": 14248.0
    },
    "AMANI CONCEPT TRADING LLC (KAPDA)": {
        "L": 277586.0,
        "M": 205823.0,
        "XL": 290700.0,
        "XXL": 82272.0,
        "XXXL": 74070.0
    },
    "AMBIKA SYAM SUNDAR": {
        "L": 20698.0,
        "M": 20479.0,
        "S": 20442.0,
        "XL": 19417.0,
        "XXL": 19355.0,
        "XXXL": 16688.0
    },
    "ANJU BHARATI": {
        "L": 42934.0,
        "M": 47014.0,
        "S": 51022.0,
        "XL": 43552.0,
        "XS": 37134.0,
        "XXL": 20208.0
    },
    "ANU RANJANI ANPALAGAN": {
        "L": 8704.0,
        "M": 8704.0,
        "S": 8704.0,
        "XL": 8704.0,
        "XS": 4926.0,
        "XXL": 8704.0,
        "XXXL": 4926.0
    }
};

  const customers = Object.keys(data);
  const sizes = Array.from(new Set(Object.values(data).flatMap(customerData => Object.keys(customerData))));
  const seriesData = [];
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'cyan', 'magenta', 'yellow']; // Define colors for each size
  let colorIndex = 0;

  for (const size of sizes) {
    const sizeData = [];
    for (const customer of customers) {
      sizeData.push(data[customer][size] || 0);
    }
    seriesData.push({ data: sizeData, color: colors[colorIndex], label: size }); // Assign color and label to each series
    colorIndex = (colorIndex + 1) % colors.length; // Loop through colors

  }

  return (
    
      <BarChart
        series={seriesData}
        xAxis={[{ data: customers, scaleType: 'band' }]}
        {...chartSetting} // Spread the chart settings
      />
      
  );
}
