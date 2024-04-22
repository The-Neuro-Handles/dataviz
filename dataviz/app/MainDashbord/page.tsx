"use client"
import React from 'react'
import TestLinearPlot from '../../components/Plots/test'
import Plot_Amazon_Linear from '../../components/Plots/Plot_Amazon_Linear'  
import LinearPlot from '../../components/Plots/LinearPlot'
import Population_PieChart from '../../components/Plots/Population_PieChart'

function MainDashboard() {
  // var data={Plot_Amazon_Linear}  
  return (
  <>
    {/* <TestLinearPlot/> */}
    {/* <LinearPlot data={data} /> */}
    {/* <Plot_Amazon_Linear/> */}
    <Population_PieChart/>

    </>
  )
}

export default MainDashboard