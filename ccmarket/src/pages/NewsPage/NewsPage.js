import React, { Component } from "react";
import "./NewsPage.css";
import DataBranchNews from "../../containers/DataBranchNews/DataBranchNews";
import Link from "react-router-dom/Link";
// import NavLink from "react-router-dom/NavLink";

class NewsPage extends Component {
  state = {
    query:this.props.query
  }
  componentDidMount(){
    // console.log('CDM - ' + this.props.pageOn);
    // console.log('CDM - ' + this.props.query);
    // console.log('CDM - ' + this.state.query);
    
    
  }

  componentWillReceiveProps(nextProps){
      // console.log('CWR - ' + this.props.pageOn);
      // console.log('CWR - ' + this.props.query);
      
      // console.log('CWR - ' + this.state.query);
      this.setState((prevState,prevProps)=>({query: nextProps.query}));
      
      // this.forceUpdate();
  }

  render() {
    console.log(this.state.query);
    return (
      <div className="NewsPage--container">
        {/* <ContentSection /> */}
        <div className="NewsPage--container-inner">
          <div className="NewsPage--pagename">
            <h1>Coin News</h1>
            <h3>Bitcoin News Updates</h3>
            <div className="NewsPage--container-inner-links">
              <Link to="/news/Coindesk">
                <span>Coindesk</span>
              </Link>
              <Link to="/news/BTC">
                <span>BTC</span>
              </Link>
              <Link to="/news/Blockchain">
                <span>Blockchain</span>
              </Link>
              <Link to="/news/Cryptocurrency">
                <span>Cryptocurrency</span>
              </Link>
              <Link to="/news/Ethereum">
                <span>Ethereum</span>
              </Link>
              <a href="/news/Initial+Coin+Offering">
                <span>Initial Coin Offering</span>
              </a>
              <a href="/news/Vitalik+Buterin">
                <span>Vitalik Buterin</span>
              </a>
            </div>
          </div>
          <div>
            <DataBranchNews query={this.state.query} limit="50" />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
