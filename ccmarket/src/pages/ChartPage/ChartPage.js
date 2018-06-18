import React, { Component, Fragment } from "react";
import "./ChartPage.css";
import ChartPageContent from "../../containers/ChartPageContent/ChartPageContent";

class ChartPage extends Component {
  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=15")
      .then(res => res.json())
      .then(
        data => this.setState(prev => ({ loading: false, data })),
        error => this.setState(prev => ({ loading: false, error }))
      );
  }

  renderLinks = () => {
    return (
      <div className="ChartPage--subheading">
        <span className="ChartPage-link">
          <a href="/charts/range/7d">7 day</a>
        </span>
        <span className="ChartPage-link">
          <a href="/charts/range/30d">30 day</a>
        </span>
        <span className="ChartPage-link">
          <a href="/charts/range/90d">90 day</a>
        </span>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <div className="ChartPage--container">
          <div className="ChartPage--heading">
            <h3>Coin Charts</h3>
          </div>

          {this.renderLinks()}

          <ChartPageContent {...this.props} />
        </div>
      </Fragment>
    );
  }
}

export default ChartPage;
