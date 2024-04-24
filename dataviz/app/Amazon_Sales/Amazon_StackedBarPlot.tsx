import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Fixed_Card from '../../components/Fixed_Card'

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
        console.log('Data of Amazon Sales:', data);
      })
      .catch(error => {
        console.error('Error at Amazon data:', error);
      });
  }, []);
  const categories=['kurta', 'Top', 'Set' ,'Western Dress' ,'Ethnic Dress', 'Bottom' ,'Saree',  'Blouse' ,'Dupatta']

  return (

    <Fixed_Card>

      {Object.keys(stackplotdata.seriesA).length > 0 && (
        <BarChart
          series={[
            { data: stackplotdata.seriesA.data, label: 'Series A', stack: 'total' },
            { data: stackplotdata.seriesB.data, label: 'Series B', stack: 'total' },
            { data: stackplotdata.seriesC.data, label: 'Series C', stack: 'total' },
          ]}
          xAxis={[{ data: categories, scaleType: 'band' }]}
          height={400}
        />
      )}
    </Fixed_Card>
  );
}
