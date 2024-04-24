import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const HorizontalBars = () => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL of the raw data file on GitHub
        const url = 'https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/lm_international/cleaned_dataset/InternationalSalesReport/top_15_style_grossamount.json';

        // Fetch data from the URL
        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the dataset state with the fetched data
        setDataset(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const valueFormatter = (value) => `${value}mm`;

  const chartSetting = {
    xAxis: [
      {
        label: 'Gross Amount',
      },
    ],
    width: 500,
    height: 400,
  };

  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'Style' }]}
      series={[{ dataKey: 'GROSS AMT', label: 'Gross amount for Top 15 Styles', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
};

export default HorizontalBars;
