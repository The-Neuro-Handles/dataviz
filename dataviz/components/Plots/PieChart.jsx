// Import necessary packages from d3
import * as d3 from 'd3';

const createPieChart = (data) => {
  // Create SVG element
  const svg = d3.select('svg');
  const width = +svg.attr('width');
  const height = +svg.attr('height');

  // Create pie function
  const pie = d3.pie().sort(null).value(d => d);

  // Create arc function
  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 1)
    .cornerRadius(4)
    .padAngle(0.03);

  // Choose color palette
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  // Calculate pie data
  const pieData = pie(data.y);

  // Append arcs to SVG
  svg.selectAll('path')
    .data(pieData)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => colors(i));

  // Add legend
  const legend = svg.selectAll('.legend')
    .data(data.x)
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => `translate(0, ${i * 20})`);

  legend.append('rect')
    .attr('x', width - 18)
    .attr('width', 18)
    .attr('height', 18)
    .attr('fill', (d, i) => colors(i));

  legend.append('text')
    .attr('x', width - 24)
    .attr('y', 9)
    .attr('dy', '.35em')
    .style('text-anchor', 'end')
    .text(d => d);
};

export default createPieChart;
