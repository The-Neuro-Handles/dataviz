import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

import plot_settings from '@/components/Plot_Settings';
import Fixed_Card from '@/components/Fixed_Card';
import { Typography } from '@mui/joy';

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
  };

  return (
    <Fixed_Card>
      <Typography variant="h5" component="h2">Style VS Gross Amount</Typography>
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'Style' }]}
      series={[{ dataKey: 'GROSS AMT', label: 'Gross amount for Top 15 Styles' }]}
      layout="horizontal"
      {...chartSetting}
      colors={plot_settings.colors}
      height={400}
    />
    </Fixed_Card>
  );
};

export default HorizontalBars;
