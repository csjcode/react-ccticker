import React, { Component } from "react";
import "./NewsPage.css";
import DataBranchNews from "../../containers/DataBranchNews/DataBranchNews";
import Link from "react-router-dom/Link";

class NewsPage extends Component {
  
  componentWillMount(){
    console.log(this.props.pageOn);
    console.log(this.props.query);
  }

  render() {
    return (
      <div className="NewsPage--container">
        {/* <ContentSection /> */}
        <div className="NewsPage--container-inner">
          <div className="NewsPage--pagename">
            <h1>Coin News</h1>
            <h3>Bitcoin News Updates</h3>
            <div className="NewsPage--container-inner-links">
              <Link to="/news/Bitcoin">
                <span>Bitcoin</span>
              </Link>
              <Link to="/market/">
                <span>Bitcoin</span>
              </Link>
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
