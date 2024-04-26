import React from 'react'
import * as d3 from 'd3'
import Fixed_Card from '@/components/Fixed_Card'
import Histogram from '@/components/Plots/Histogram'

function Hist_Weight() {
    const [weights, setWeights] = React.useState([]);
    React.useEffect(() => { 
        d3.csv("https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/all_fixes/cleaned_dataset/PLMarch_Data/Cleaned_PLMarch.csv").then(function(data) {
            //const weight = data.map(item => console.log(item.Weight));
            //setWeights(weight);
            const weight = data.map(item => Number(item.Weight));
            setWeights(weight);
        });
    },[])
    //console.log(weights)
  return (
    <Fixed_Card>
        <h1>Weight Histogram</h1>
        <Histogram data={weights} width={600} height={400} />
        
    </Fixed_Card>
  )
}

export default Hist_Weight