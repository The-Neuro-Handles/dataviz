import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Fixed_Card from '@/components/Fixed_Card';
import Typography from '@mui/joy/Typography';

export default function BasicPie() {
  // Custom colors suitable for a dark background
  const customColors = ["#1984c5", "#22a7f0", "#63bff0", "#a7d5ed", "#e2e2e2", "#e1a692", "#de6e56", "#e14b31", "#c23728"];


  return (
    <Fixed_Card>
      <Typography variant="h5" component="h2">Total Gross with Size Chart</Typography>
    <PieChart
      series={[
        {
          data: [
            { "value": 50203.0, "label": "4XL" },
            { "value": 62491.0, "label": "5XL" },
            { "value": 59175.0, "label": "6XL" },
            { "value": 4488.0, "label": "FREE" },
            { "value": 2929450.0, "label": "L" },
            { "value": 2736527.0, "label": "M" },
            { "value": 0.0, "label": "PCS" },
            { "value": 1968106.0, "label": "S" },
            { "value": 2473104.0, "label": "XL" },
            { "value": 606579.0, "label": "XS" },
            { "value": 1918798.0, "label": "XXL" },
            { "value": 1224803.0, "label": "XXXL" }
          ],
        },
      ]}
      colors={customColors}
      height={400}
    />
    </Fixed_Card>
  );
}
