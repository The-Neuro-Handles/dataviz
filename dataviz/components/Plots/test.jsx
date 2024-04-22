import React, { useState, useEffect } from 'react';
import LinearPlot from './LinearPlot';


const csv='https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/main/cleaned_dataset/Cleaned_AmazonSale.csv'
const generateLinearPlotData=(csv)=>{
    const data={x:[],y:[]}
    csv.array.forEach(element => {
                console.log(element)
        
    });    
    
    
    return NaN}

const generateRandomData = (count) => {
  const data = { x: [], y: [] };
  for (let i = 0; i < count; i++) {
    data.x.push(Math.random() * 100); // Random x values between 0 and 100
    data.y.push(Math.random() * 100); // Random y values between 0 and 100
  }
  return data;
};

const TestLinearPlot = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Generate random data when component mounts
    const randomData = generateRandomData(20); // Generate 20 random data points
    setData(randomData);
  }, []);

  return (
    <div>
      <h1>Test Linear Plot</h1> 
      {data && <LinearPlot data={data} />}
    </div>
  );
};

export default TestLinearPlot;
