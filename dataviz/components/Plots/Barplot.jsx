import React, { useEffect } from 'react';
import * as d3 from 'd3';

function BarPlot({ data }) {
    // data is an array of objects with 'label' and 'value' properties
    useEffect(() => {
        if (data && data.length > 0) {
            // Set up SVG dimensions and margins
            const margin = { top: 20, right: 20, bottom: 30, left: 40 };
            const width = 800 - margin.left - margin.right;
            const height = 400 - margin.top - margin.bottom;

            // Create SVG element
            const svg = d3.select('#barplot-container')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`);

            // Define scales
            const x = d3.scaleBand()
                .domain(data.map(d => d.label))
                .range([0, width])
                .padding(0.1);

            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.value)])
                .range([height, 0]);

            // Draw bars
            svg.selectAll('.bar')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', d => x(d.label))
                .attr('y', d => y(d.value))
                .attr('width', x.bandwidth())
                .attr('height', d => height - y(d.value))
                .attr('fill', 'steelblue');

            // Add x-axis
            svg.append('g')
                .attr('transform', `translate(0, ${height})`)
                .call(d3.axisBottom(x));

            // Add y-axis
            svg.append('g')
                .call(d3.axisLeft(y));
        }
    }, [data]);

    return (
        <div id="barplot-container"></div>
    );
}

export default BarPlot;
