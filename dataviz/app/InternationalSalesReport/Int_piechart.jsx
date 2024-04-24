import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  // Custom colors suitable for a dark background
  const customColors = ['#FFC107', '#03A9F4', '#4CAF50', '#FF5722', '#9C27B0', '#673AB7', '#FF9800', '#2196F3', '#8BC34A', '#FF5252', '#00BCD4', '#FFEB3B'];

  return (
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
    />
  );
}
