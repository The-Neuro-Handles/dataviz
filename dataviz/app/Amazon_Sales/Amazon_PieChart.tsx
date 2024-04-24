import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Fixed_Card from '../../components/Fixed_Card'

export default function Amazon_PieChart() {
  return (
    <Fixed_Card>
    <PieChart

      series={[
        {
          data: [
            { id: 0, value: 78240,color:'orange', label: 'Amazon' },
            { id: 1, value: 29979,color:'blue', label: 'Merchant' },

          ],
        },
      ]}
      height={400}
    />
    </Fixed_Card>
  );
}