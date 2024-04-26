// Import D3.js
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const Histogram = ({ data, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);

    // Create a histogram generator
    const histogram = d3.histogram()
      .value(d => d) // Use the value accessor
      .domain(d3.extent(data)) // Define the domain
      .thresholds(20); // Set the number of bins

    // Generate the histogram data
    const bins = histogram(data);

    // Create scales for x and y axes
    const x = d3.scaleLinear()
      .domain([d3.min(data), d3.max(data)])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .range([height, 0]);

    // Create the bars of the histogram
    svg.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
      .attr("x", d => x(d.x0))
      .attr("y", d => y(d.length))
      .attr("width", d => x(d.x1) - x(d.x0) - 1)
      .attr("height", d => height - y(d.length))
      .attr("fill", "steelblue");

    // Create x-axis
    const xAxis = d3.axisBottom(x);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    // Create y-axis
    const yAxis = d3.axisLeft(y);
    svg.append("g")
      .call(yAxis);
  }, [data, width, height]);

  return (
    <svg ref={svgRef} width={width} height={height}></svg>
  );
};

export default Histogram;
