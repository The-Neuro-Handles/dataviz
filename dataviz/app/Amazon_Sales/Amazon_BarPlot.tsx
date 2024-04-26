import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Fixed_Card from '../../components/Fixed_Card'

import plot_settings from '@/components/Plot_Settings';



const chartSetting = {
    xAxis: [
      {
        label: 'Count',
      },
    ],
  };
  


export default function Amazon_BarPlot() {

  const [plotdata,dataLinear] = React.useState(null);
  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/ai_preprocessing_amazon/cleaned_dataset/Amazon_Data/amazon_barplot_sizes.json')
  .then(response => {
    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Network response was not while retrieving Amazon data');
    }  
    return response.json();
  })
  .then(data => {
    const convertedData = [];


// Iterate over the elements of 'size' array
 for (let i = 0; i < data.size.length; i++) {
    // Create an object with 'size' and 'values'
    const obj = {
        size: data.size[i],
        values: data.values[i]
    };
    // Push the object to the converted data array
    convertedData.push(obj);}

    dataLinear(convertedData);

    // Use the parsed JSON data
    console.log('Data:', convertedData);
  })
  .catch(error => {
    console.error('Error at Amazon data:', error);
  });

  }, []);
  



  return (
    <>
     <Fixed_Card>
    {plotdata && <BarChart 
      dataset={plotdata}
      yAxis={[{ scaleType: 'band', dataKey: "size" }]}
      series={[{ dataKey: "values", label: 'Seoul rainfall'}]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
      colors={plot_settings.colors}
    />}
    </Fixed_Card>
    </>
  );
}