import * as d3 from "d3";
import {useEffect, useRef, useState} from "react";

import { BarChart } from '@mui/x-charts/BarChart';


import BarPlot  from "./Barplot";

export default function D3Example() {
    const [data_c, setData] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        d3.csv("https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/main/cleaned_dataset/Cleaned_PLMarch.csv", d3.autoType).then(data => {
            const columnData = data.map(d => d.Sku);
            
            const counts = {};
            columnData.forEach(value => {
                counts[value] = (counts[value] || 0) + 1;
            });


            const fin_data = [];
            const fin_data_count = [];
            for (const [key, value] of Object.entries(counts)) {
                fin_data.push({label: key, value: value});
                fin_data_count.push(value);
            }
            setData(fin_data);
            setCount(fin_data_count);
        });

      }, []);
    
  return (
        <div>
            <h1>Bar Plot Example</h1>
            {data_c && <BarPlot data={data_c} />}
            
        </div>
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