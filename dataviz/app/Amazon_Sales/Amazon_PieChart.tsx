import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Fixed_Card from '../../components/Fixed_Card'
import plot_settings from '@/components/Plot_Settings';

export default function Amazon_PieChart() {
  return (
    <Fixed_Card>
    <PieChart

      series={[
        {
          data: [
            { id: 0, value: 78240, label: 'Amazon' },
            { id: 1, value: 29979, label: 'Merchant' },

          ],
        },
      ]}
      height={400}
      colors={plot_settings.colors}
    />
    </Fixed_Card>
  );
}