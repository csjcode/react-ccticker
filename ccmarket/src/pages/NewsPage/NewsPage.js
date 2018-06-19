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
    var stateQuery = this.state.query.replace(/\+/g,' ').toLowerCase();
    return (
      <div className="NewsPage--container">
        {/* <ContentSection /> */}
        <div className="NewsPage--container-inner">
          <div className="NewsPage--pagename">
            <h2>Coin News</h2>
            <h3><span style={{textTransform:'capitalize'}}>{stateQuery}</span> News Updates</h3>
            <div className="NewsPage--container-inner-links">
              <a href="/news/Coindesk">
                <span>Coindesk</span>
              </a>
              <a href="/news/">
                <span>BTC</span>
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
            <DataBranchNews query={this.state.query} limit="50" />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
