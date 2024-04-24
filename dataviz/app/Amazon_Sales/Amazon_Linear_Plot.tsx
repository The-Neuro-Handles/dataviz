import * as React from 'react'  
import * as d3 from "d3";
import { LineChart } from '@mui/x-charts/LineChart';
import Fixed_Card from '../../components/Fixed_Card'


const Amazon_Linear_Plot = () => {
  
  const [plotdata,dataLinear] = React.useState({x:[],y:[]});
  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/ai_preprocessing_amazon/cleaned_dataset/Amazon_Data/amazon_month_vs_quant.json')
  .then(response => {
    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Network response was not while retrieving Amazon data');
    }  
    return response.json();
  })
  .then(data => {
    dataLinear(data);
    // Use the parsed JSON data
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error at Amazon data:', error);
  });

  }, []);
    
    return (
      <>
      <Fixed_Card>
      <LineChart
        xAxis={[{ data: plotdata.x }]}
        series={[
          {
            data: plotdata.y,
          },
        ]}
        width={500}
        height={300}
      />
      </Fixed_Card>
      </>
    );
}

export default Amazon_Linear_Plot;