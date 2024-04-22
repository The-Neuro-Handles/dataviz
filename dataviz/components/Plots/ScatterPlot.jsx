import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';


// Scatterplot component expects the data to be in the format of {x: [], y: []} where x and y are arrays of the same length

const ScatterPlot = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right+20)
      .attr('height', height + margin.top + margin.bottom+20)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear()
      .domain([d3.min(data.x), d3.max(data.x)])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([d3.min(data.y), d3.max(data.y)])
      .range([height, 0]);

    svg.append('path')
      .datum(data.x) 
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)


    svg.selectAll('circle')
      .data(data.x)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d))
      .attr('cy', (d, i) => yScale(data.y[i]))
      .attr('r', 5)
      .attr('fill', 'steelblue');

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));

      svg.append("text")
      .attr("x", width / 2) // Center the title horizontally
      .attr("y",height + margin.bottom+10) // Adjust the vertical position as needed
      .attr("text-anchor", "middle") // Center the text horizontally
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "white")
      .text("Scatter plot");  

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default ScatterPlot;
