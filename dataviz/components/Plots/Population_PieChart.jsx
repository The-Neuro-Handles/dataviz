import React, { useEffect,useState } from 'react';
import createPieChart from './PieChart'; // Adjust the import path as needed

const PieChartTest = () => {
  const [data,setData] = useState({});  
  useEffect(() => {
    // Sample data
    const data = {
      x: ['Category A', 'Category B', 'Category C'],
      y: [30, 40, 50]
    };

    // Call the createPieChart function with sample data
    setData(data);
  }, []);

  return (
     <>    
      <createPieChart data={data}/>

     </>
    );
};

export default PieChartTest;
