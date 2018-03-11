import React, { Component } from "react";

const width = window.innerWidth;
const height = window.innerHeight;

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

	const padding = 100;
	const xMax = width - padding;
	const yMax = height - padding;

	return (
		<div>
		  <svg width={width} height={height}>
			 <rect x={0} y={0} width={width} height={height} fill="#32deaa" />
		  </svg>
		</div>
	 )
 }
}

export default DataSymbol;