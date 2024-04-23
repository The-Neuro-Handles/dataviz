import { LinePlot } from '@mui/x-charts';

// import * as React from 'react';


// export default function BasicLineChart() {
//   return (
//     <LineChart
//       xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//       series={[
//         {
//           data: [2, 5.5, 2, 8.5, 1.5, 5],
//         },
//       ]}
//       width={500}
//       height={300}
//     />
//   );
// }

import { LineChart } from '@mui/x-charts/LineChart';
import React, { useState, useEffect } from 'react';



export default function BasicLineChart() {
  const [chartData, setChartData] = useState({ input: [], output: [] });

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/lm_international/cleaned_dataset/InternationalSalesReport/monthly_gross_amount.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        return response.json();
      })
      .then(data => {
        const inputData = data.input;
        const outputData = data.output;
        // console.log('Input:', inputData);
        // console.log('Output:', outputData);
        setChartData({ input: inputData, output: outputData });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return chartData.input.length > 0 ? (
    <LineChart 
    // grid={{ horizontal: true }}
    
      xAxis={[{ data: chartData.input, label: 'Month' }]}
      series={[
        {
          data: chartData.output,
          label: 'Monthly Gross Amount',
        }
        
        
      ]}
      width={300}
      height={300}
    />
  ) : (
    <div>Loading...</div>
  );
}


