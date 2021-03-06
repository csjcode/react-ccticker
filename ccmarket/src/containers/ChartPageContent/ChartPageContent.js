import React, { Component } from "react";
import "./ChartPageContent.css";
import MarketDataSymbol from "../MarketDataSymbol/MarketDataSymbol";
import LoadingView from "../../common/LoadingView/LoadingView";
import ErrorView from "../../common/ErrorView/ErrorView";

class ChartPageContent extends Component {
  state = {
    loading: true,
    data: []
  };

  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=17")
      .then(res => res.json())
      .then(
        data => this.setState(prev => ({ loading: false, data })),
        error => {
          this.setState(prev => ({ loading: false, error }));
          console.log("Data: " + this.state.data);
        }
      );
  }

  renderData = () => {
    return this.state.data.map((data, i) => {
      // return ({data[i]})

      

      if (data.symbol != "MIOTA") {
        return (
          <div className="ChartPageContent--column" key={data.symbol}>
            <MarketDataSymbol
              width={250}
              height={120}
              sym={data.symbol}
              {...this.props}
            />
            <div className="ChartPageContent--column-subheading">
              {data.symbol}
              <br />
              {data.name}
            </div>
          </div>
        );
      } else {
        return null
      }

      // return console.log(data);
    });
  };

  render() {
    if (this.state.loading) {
      return <LoadingView />;
    } else if (this.state.data) {
      return this.renderData();
    } else {
      return <ErrorView />;
    }
  }
}

export default ChartPageContent;
