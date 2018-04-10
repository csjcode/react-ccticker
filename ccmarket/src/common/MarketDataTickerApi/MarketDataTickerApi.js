import React, { Component } from "react";
import "./MarketDataTickerApi.css";
import MarketDataBranch from "../MarketDataBranch/MarketDataBranch";

class MarketDataTickerApi extends Component {
  state = { loading: true };

  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
      .then(res => res.json())
      .then(
        data => this.setState(prevState => ({ loading: false, data })),
        error => this.setState(prevState => ({ loading: false, error }))
      );
  }

  render() {
    return (
      <div style={{ minHeight: 800 }}>
        <MarketDataBranch {...this.state} />
      </div>
    );
  }
}

export default MarketDataTickerApi;
