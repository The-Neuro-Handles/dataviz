import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
export default function StackedBarChart() {
  // Provided data
  const data = {
    "AANCHOL": {
        "5": 3818.0,
        "6": 1272.0,
        "7": 3181.0,
        "1": 3181.0
    },
    "ABBI COLLECTION ": {
        "5": 9890.0,
        "4": 2404.0,
        "6": 2550.0,
        "2": 1728.0,
        "7": 13288.0,
        "1": 7254.0
    },
    "ABDUL RAHMAN(SINGAPORE)": {
        "5": 16086.0,
        "6": 14710.0,
        "7": 16010.0,
        "1": 1300.0
    },
    "ADDVEN SOLUTIONS PRIVATE LIMITED": {
        "5": 18538.0,
        "2": 13690.0
    },
    "AKASH KAUSHAL": {
        "5": 574.0,
        "4": 1091.0,
        "3": 2212.0,
        "6": 649.0,
        "1": 1054.0
    },
    "ALAMELOO(MALA)": {
        "8": 1476.0,
        "5": 15060.0,
        "4": 5314.0,
        "3": 3850.0,
        "6": 25993.0,
        "7": 14248.0
    },
    "AMANI CONCEPT TRADING LLC (KAPDA)": {
        "5": 277586.0,
        "4": 205823.0,
        "6": 290700.0,
        "7": 82272.0,
        "1": 74070.0
    },
    "AMBIKA SYAM SUNDAR": {
        "5": 20698.0,
        "4": 20479.0,
        "3": 20442.0,
        "6": 19417.0,
        "7": 19355.0,
        "1": 16688.0
    },
    "ANJU BHARATI": {
        "5": 42934.0,
        "4": 47014.0,
        "3": 51022.0,
        "6": 43552.0,
        "2": 37134.0,
        "7": 20208.0
    },
    "ANU RANJANI ANPALAGAN": {
        "5": 8704.0,
        "4": 8704.0,
        "3": 8704.0,
        "6": 8704.0,
        "2": 4926.0,
        "7": 8704.0,
        "1": 4926.0
    }
  };
  // Extract unique customers
  const customers = Object.keys(data);
  // Extract unique sizes
  const sizes = Array.from(new Set(Object.values(data).flatMap(Object.keys)));
  // Initialize arrays to store data for each series
  const seriesData = [];
  const seriesLabels = [];
  const seriesIds = [];
  // Iterate over each size and collect data for each customer
  for (const size of sizes) {
    // Initialize array to store data for the current size
    const sizeData = [];
    // Iterate over each customer and push their value for the current size
    for (const customer of customers) {
      sizeData.push(data[customer][size] || 0);
    }
    // Add data for the current size to the series data
    seriesData.push({ data: sizeData });
    // Add labels and ids for the current size to their respective arrays
    seriesLabels.push(size);
    seriesIds.push(size);
  }
  return (
    <BarChart
      width={500}
      height={500}
      series={seriesData}
      xAxis={[{ data: customers, scaleType: 'band' }]}
      labels={seriesLabels}
      ids={seriesIds}
    />
  );
}  


//import React, { useState, useEffect } from 'react';
//import { BarChart } from '@mui/x-charts/BarChart';
//
//export default function StackedBarChart() {
//  const [data, setData] = useState(null);
//
//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        // URL of the raw JSON file on GitHub
//        const url = 'https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/lm_international/cleaned_dataset/InternationalSalesReport/Customers_10_Gross_Size.json';
//
//        // Fetch data from the URL
//        const response = await fetch(url);
//
//        // Check if the request was successful
//        if (!response.ok) {
//          throw new Error('Failed to fetch data');
//        }
//
//        // Parse the JSON response
//        const jsonData = await response.json();
//
//        // Set the fetched data to the state
//        setData(jsonData);
//      } catch (error) {
//        console.error('Error fetching data:', error);
//      }
//    };
//
//    fetchData();
//  }, []); // Empty dependency array ensures useEffect runs only once on component mount
//
//  // Return loading message if data is not yet fetched
//  if (!data) {
//    return <div>Loading...</div>;
//  }
//
//  // Extract unique customers
//  const customers = Object.keys(data);
//
//  // Extract unique sizes
//  const sizes = Array.from(new Set(Object.values(data).flatMap(Object.keys)));
//
//  // Initialize arrays to store data for each series
//  const seriesData = [];
//  const seriesLabels = [];
//  const seriesIds = [];
//
//  // Iterate over each size and collect data for each customer
//  for (const size of sizes) {
//    // Initialize array to store data for the current size
//    const sizeData = [];
//
//    // Iterate over each customer and push their value for the current size
//    for (const customer of customers) {
//      sizeData.push(data[customer][size] || 0);
//    }
//
//    // Add data for the current size to the series data
//    seriesData.push({ data: sizeData });
//
//    // Add labels and ids for the current size to their respective arrays
//    seriesLabels.push(size);
//    seriesIds.push(size);
//  }
//
//  return (
//    <BarChart
//      width={1500}
//      height={600}
//      series={seriesData}
//      xAxis={[{ data: customers, scaleType: 'band' }]}
//      labels={seriesLabels}
//      ids={seriesIds}
//    />
//  );
//}
