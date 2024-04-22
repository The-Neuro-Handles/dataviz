import * as d3 from "d3";
import {useEffect, useRef, useState} from "react";

import { BarChart } from '@mui/x-charts/BarChart';



export default function D3Example() {
    useEffect(() => {
        d3.csv("https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/main/cleaned_dataset/Cleaned_AmazonSale.csv", d3.autoType).then(data => {
            const columnData = data.map(d => d.Sku);
            const counts = {};
            columnData.forEach(value => {
                counts[value] = (counts[value] || 0) + 1;
            });
            console.log(counts);
        });

      }, []);
    
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  );
}




//export async function getServerSideProps() {
//    // Fetch data from your API or other sources
//
//    const data = await d3.csv('https://gist.githubusercontent.com/xrd/9a73ccf7ac1e41b728202f3c70cdb959/raw/9c3a1bde4dee9f0d5f80e705bb4f25353ea6b398/test.csv')
//    .row(function (d){
//        console.log( d );
//        return {
//            ax: Number(d.ax),
//            ay: Number(d.ay)
//        };
//    })
//    .get(function (error, data){
//        console.log(data)
//    });
//    return {
//      props: {
//        data,
//      },
//    };
//  }