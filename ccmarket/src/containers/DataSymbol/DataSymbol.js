import React, { Component } from "react";
import { scaleTime, scaleLinear } from "@vx/scale";
import { extent, max } from "d3-array";
import { LinePath } from "@vx/shape";

// const width = window.innerWidth * .3;
// const height = window.innerHeight * .3;
const width = 150;
const height = 75;
const xSelector = d => new Date(d.date);
const ySelector = d => d.price;

class DataSymbol extends Component {
  state = {
    data: null,
  };
  async componentDidMount() {
    const res = await fetch("https://api.coindesk.com/v1/bpi/historical/close.json");
    const data = await res.json();

    this.setState({
      data: Object.keys(data.bpi).map(date => {
        return {
          date,
          price: data.bpi[date],
        };
      }),
    });
  }

  render() {
	const { data } = this.state;
	if (!data) return null;

	const padding = 10;
	const xMax = width - padding;
	const yMax = height - padding;
	const xScale = scaleTime({
		range: [padding, xMax],
		domain: extent(data, xSelector),
	 });
	
    const dataMax = max(data, ySelector);
    const yScale = scaleLinear({
      range: [yMax, padding],
      domain: [0, dataMax + (dataMax / 3)],
	 });
	 
	return (
		<div>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="#000" />
        <LinePath
          data={data}
          xScale={xScale}
          yScale={yScale}
          x={xSelector}
          y={ySelector}
          strokeWidth={2}
          stroke="#0f0"
          strokeLinecap="square"
          fill="transparent"
        />
      </svg>
    </div>
	 )
 }
}

export default DataSymbol;