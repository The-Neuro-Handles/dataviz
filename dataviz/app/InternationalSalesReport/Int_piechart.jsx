import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function DynamicPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL of the raw JSON GitHub URL
        const url = 'https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/lm_international/cleaned_dataset/InternationalSalesReport/sum_gross_amount_by_size.json';

        // Fetch data from the URL
        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON response
        const jsonData = await response.json();
        console.log(jsonData);

        // Set the fetched data to the state
        setData(jsonData[0].data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <PieChart
      series={[{ data }]}
      width={400}
      height={200}
    />
  );
}
