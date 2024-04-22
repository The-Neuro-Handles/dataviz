import { X } from '@mui/icons-material';
import * as d3 from 'd3';
import { useEffect,useState } from 'react';
import LinearPlot from '../../components/Plots/LinearPlot'
import Scatterplot from './ScatterPlot'

const Plot_Amazon_Linear = () => {
    const [data_linear,setDataLinear] = useState({x:[],y:[]});
    useEffect(() => {
        const fetchData = async () => {
            const data = await d3.csv('https://raw.githubusercontent.com/The-Neuro-Handles/dataviz/main/cleaned_dataset/Cleaned_AmazonSale.csv');
            
            if (data.length > 0) {
                // Filter data for a particular month
                const desiredMonth = 22; // Example: April
                const filteredData = data.filter(row => {
                    const dateParts = row.Date.split('-').map(part => parseInt(part));

                    
                    return dateParts[2] === desiredMonth; // Check if the month matches
                });
                // console.log(filteredData)

                // Group records by day (excluding month and year) and sum quantities
                const groupedData = {};
                filteredData.forEach(row => {
                    const dateParts = row.Date.split('-').map(part => parseInt(part)); // Assuming date format is MM-DD-YY
                    const dayKey = dateParts[0]; // Get day
                    // console.log(dayKey)
                    if (!groupedData[dayKey]) {
                        groupedData[dayKey] = 0;
                    }
                    groupedData[dayKey] += parseInt(row.Qty); // Assuming Qty is the quantity column
                });
                
                // Convert grouped data to an array of objects
                const data_linear ={x:[],y:[]}

                Object.keys(groupedData).map(day => {
                    data_linear.x.push(parseInt(day)),
                    data_linear.y.push(groupedData[day])
                });    
            console.log(data_linear.x )  
           
            setDataLinear(data_linear) ;                
            } else {
                setDataLinear({x:[],y:[]});
            }
        };
        fetchData();
        
    }, []);


    
    //  return <div>{data_linear.x,data_linear.y}</div>
    return (
        <>
        <Scatterplot data={data_linear} />
        <LinearPlot data={data_linear}/>
        </>
    );
};

export default Plot_Amazon_Linear;




    

