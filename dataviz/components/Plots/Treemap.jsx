import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import plot_settings from '@/components/Plot_Settings';
const Treemap = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const color = d3.scaleOrdinal()
    .range(plot_settings.colors);

    const treemap = data => d3.treemap()
      .size([width, height])
      .padding(1)
      .round(true)(
        d3.hierarchy(data)
          .sum(d => d.value)
          .sort((a, b) => b.value - a.value)
      );

    const root = treemap(data);
    const t = d3.transition()
    .duration(750)
    .ease(d3.easeLinear);

    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);
    
      


    svg.selectAll('rect')
      .data(root.leaves())
      .enter()
      
      .append('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', d => color(d.parent.data.name))
      .attr('stroke', 'black')
      .on('mouseover', (event, d) => {
        tooltip.transition()
          .duration(200)
          .style('opacity', 0.9);
        tooltip.html(`${d.parent.data.name}<br/>${d.data.name}: ${d.data.value}`)
          .style('left', (event.pageX) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', () => {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      });

    svg.selectAll('text')
      .data(root.leaves())
      .enter()
      .append('text')
      .attr('x', d => d.x0 + 5)
      .attr('y', d => d.y0 + 20)
      .text(d => d.data.name)
      .attr('font-size', '12px')
      .attr('fill', 'white')
      .attr('transform', 'translate(0, 0)');

    // Add animation
    svg.selectAll('rect')
        .transition(t)
      .attr('opacity', 1);
  }, [data]);

  return <svg ref={svgRef} />;
};

export default Treemap;