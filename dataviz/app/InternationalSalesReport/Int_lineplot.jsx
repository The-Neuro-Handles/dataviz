import Fixed_Card from '@/components/Fixed_Card';
import { LinePlot } from '@mui/x-charts';

import plot_settings from '@/components/Plot_Settings';

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
import { Typography } from '@mui/joy';



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
  const customColors = ["#1984c5", "#22a7f0", "#63bff0", "#a7d5ed", "#e2e2e2", "#e1a692", "#de6e56", "#e14b31", "#c23728"];
  //console.log(plot_settings)

  return chartData.input.length > 0 ? (
    <Fixed_Card>
      <Typography variant="h5" component="h2">Montly Gross Amout Sales</Typography>
    <LineChart 
      grid={{ horizontal: true }}
    
      xAxis={[{ data: chartData.input, label: 'Month'}]}
      yAxis={[{  tickLabelStyle:{angle:-45,fontSize:10} }]}
      series={[
        {
          data: chartData.output,
          label: 'Monthly Gross Amount',
        }
        
        
      ]}
      colors={plot_settings.colors}
      
      height={400}
    />
    </Fixed_Card>
  ) : (
    <Fixed_Card>
    <div>Loading...</div>
    </Fixed_Card>
  );
}


