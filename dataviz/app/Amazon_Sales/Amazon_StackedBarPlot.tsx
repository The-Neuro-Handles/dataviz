import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Fixed_Card from '../../components/Fixed_Card'
import plot_settings from '@/components/Plot_Settings';

import { Typography } from '@mui/material';

export default function Amazon_StackedBarPlot() {
  const [stackplotdata, setData] = React.useState({ seriesA: {}, seriesB: {}, seriesC: {} });
  
  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/ai_preprocessing_amazon/cleaned_dataset/Amazon_Data/amazon_barplot.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not while retrieving Amazon data');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
      });
  }, []);
  const categories=['kurta', 'Top', 'Set' ,'Western Dress' ,'Ethnic Dress', 'Bottom' ,'Saree',  'Blouse' ,'Dupatta']

  return (

    <Fixed_Card>
<Typography variant="h5" component="h2">Status of shipment across different size of Merchandise</Typography>
      {Object.keys(stackplotdata.seriesA).length > 0 && (
        <BarChart
          series={[
            { data: stackplotdata.seriesA.data, label: 'Shipped', stack: 'total' },
            { data: stackplotdata.seriesB.data, label: 'Pending', stack: 'total' },
            { data: stackplotdata.seriesC.data, label: 'Cancelled', stack: 'total' },
          ]}
          xAxis={[{ data: categories, scaleType: 'band' }]}
          height={400}
          colors={plot_settings.colors}
        />
      )}
    </Fixed_Card>
  );
}
