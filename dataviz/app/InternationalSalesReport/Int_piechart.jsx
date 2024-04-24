import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            {
              "value": 50203.0,
              "label": "4XL"
          },
          {
              "value": 62491.0,
              "label": "5XL"
          },
          {
              "value": 59175.0,
              "label": "6XL"
          },
          {
              "value": 4488.0,
              "label": "FREE"
          },
          {
              "value": 2929450.0,
              "label": "L"
          },
          {
              "value": 2736527.0,
              "label": "M"
          },
          {
              "value": 0.0,
              "label": "PCS"
          },
          {
              "value": 1968106.0,
              "label": "S"
          },
          {
              "value": 2473104.0,
              "label": "XL"
          },
          {
              "value": 606579.0,
              "label": "XS"
          },
          {
              "value": 1918798.0,
              "label": "XXL"
          },
          {
              "value": 1224803.0,
              "label": "XXXL"
          }
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}