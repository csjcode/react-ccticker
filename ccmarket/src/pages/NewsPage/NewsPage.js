import React, { Component } from "react";
import "./NewsPage.css";
import DataBranchNews from "../../containers/DataBranchNews/DataBranchNews";

class NewsPage extends Component {
  render() {
    return (
      <div className="NewsPage--container">
        {/* <ContentSection /> */}
        <div className="NewsPage--container-inner">
          <div className="NewsPage--pagename">
            <h1>Coin News</h1>
            <h3>Bitcoin News Updates</h3>
            <div className="NewsPage--container-inner-links">
              <a href="/news/Bitcoin">
                <span>Bitcoin</span>
              </a>
              <a href="/news/Blockchain">
                <span>Blockchain</span>
              </a>
              <a href="/news/Cryptocurrency">
                <span>Cryptocurrency</span>
              </a>
              <a href="/news/Ethereum">
                <span>Ethereum</span>
              </a>
              <a href="/news/Initial+Coin+Offering">
                <span>Initial Coin Offering</span>
              </a>
              <a href="/news/Vitalik+Buterin">
                <span>Vitalik Buterin</span>
              </a>
            </div>
          </div>
          <div>
            <DataBranchNews query={this.props.query} limit="50" />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
