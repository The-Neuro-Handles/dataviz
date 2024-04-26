import React from 'react'
import * as d3 from 'd3'
import Fixed_Card from '@/components/Fixed_Card';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import plot_settings from '@/components/Plot_Settings';

function Scatter_TPs() {
    const [jsonData, setJsonData] = React.useState(null);
    React.useEffect(() => {
        d3.json('https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/all_fixes/cleaned_dataset/PLMarch_Data/TP_Data.json')
        .then(data => {
          // Set the JSON data to state
          const transformedData = data.map((item, index) => ({
            id: `data-${index}`,
            x1: item['TP 1'],
            x2: item['TP 2'],
            y: item['Weight'],
            // Define other properties as needed
          }));
          
          setJsonData(transformedData);
        })
        .catch(error => {
          console.error('Error fetching JSON data:', error);
        });
    }, [])
    console.log(jsonData)
  return (
    <Fixed_Card>
    <div>Scatter_TPs</div>
    {jsonData && <ScatterChart
      width={600}
      height={300}
      series={[
        {
          label: 'TP 1 vs Weight',
          data: jsonData.map((v) => ({ x: v.x1, y: v.y})),
        },

        {
            label: 'TP 2 vs Weight',
            data: jsonData.map((v) => ({ x: v.x2, y: v.y})),
          },
      ]}
      colors={plot_settings.colors}
    />}
    </Fixed_Card>
  )
}

export default Scatter_TPs