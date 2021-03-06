import React, {Component} from "react";
import MarketDataTickerApi from "../../common/MarketDataTickerApi/MarketDataTickerApi";
import Whatshot from "material-ui-icons/Whatshot";
import Favorite from "material-ui-icons/Favorite";
import ArrowDropDown  from "material-ui-icons/ArrowDropDown";
import ArrowDropUp  from "material-ui-icons/ArrowDropUp";

import "./MarketDataSection.css";
import Button from "material-ui/Button";
// import PropTypes from "prop-types";

class MarketDataSection extends Component {

  state = {
    onlyFavorites:false,
    rows24hHigh:false,
    rows7DayLow:false,
    rows7DayHigh: false
  }

  handleFavoriteRows = () => {
    // alert('button clicked');
    return this.setState(prevState=>({onlyFavorites: !this.state.onlyFavorites}));
  }


  handleRows24hHigh = () => {
    // alert('button clicked');
    return this.setState(prevState=>({rows24hHigh: !this.state.rows24hHigh}));
  }

  handleRows7DayLow = () => {
    // alert('button clicked');
    return this.setState(prevState=>({rows7DayLow: !this.state.rows7DayLow}));
  }

  handleRows7DayHigh = () => {
    // alert('button clicked');
    return this.setState(prevState=>({rows7DayHigh: !this.state.rows7DayHigh}));
  }

  render(props){

    // var classNameFavorites = this.state.onlyFavorites ? 'click-state' : 'base-state';

    return (
      <div className="MarketDataSection--container">
        <div className="MarketDataSection--header">Coin.API.cc Market Tracker</div>

        <div className="MarketDataSection--subheader fadein">
          Watch this page for Coin market updates.
        </div>

        <div className="MarketDataSection--intro">
          <p className="large-content">
            <b>BETA:</b>This is an experimental service using React, Redux, Firebase, Node.js, D3(vx). Cryptocurrencies are used
            primarily outside existing banking and governmental institutions and
            are exchanged over the Internet. While these alternative,
            decentralized modes of exchange are in the early stages of
            development, they have the unique potential to challenge existing
            systems of currency and payments.
          </p>
          <div>
            <span style={{marginRight:5}}>
              {this.state.onlyFavorites===false ? (
                <Button style={{padding:10, width: 220, border:'1px solid silver',backgroundColor:'#fff'}} onClick={this.handleFavoriteRows}><Favorite className="iconspace-Favorite" /> Favorites Only</Button>
              ) : (
                <Button style={{padding:10, width: 220,border:'1px solid red',backgroundColor:'#eee'}} onClick={this.handleFavoriteRows}><Favorite className="iconspace-Favorite" /> Favorites (ON)</Button>
              )}
            </span>
            <span style={{marginRight:5}}>
              {this.state.rows24hHigh===false ? (
                <Button style={{padding:10, width: 220, border:'1px solid silver',backgroundColor:'#fff'}} onClick={this.handleRows24hHigh}><Whatshot className="iconspace-Whatshot" style={{color:'darkgreen'}} /> 24hr Hot Movers</Button>
              ) : (
                <Button style={{padding:10, width: 220,border:'1px solid red',backgroundColor:'#eee'}} onClick={this.handleRows24hHigh}><Whatshot className="iconspace-Whatshot" style={{color:'silver'}}/> 24hr Hot Movers (ON)</Button>
              )}
            </span>
            <span style={{marginRight:5}}>
              {this.state.rows7DayHigh===false ? (
                <Button style={{padding:10, width: 220, border:'1px solid silver', backgroundColor:'#fff'}} onClick={this.handleRows7DayHigh}><ArrowDropUp  className="iconspace-Whatshot" style={{color:'gray'}}/> 7 Day Hot Movers</Button>
              ) : (
                <Button style={{padding:10, width: 220,border:'1px solid red',backgroundColor:'#eee'}} onClick={this.handleRows7DayHigh}><ArrowDropUp className="iconspace-Whatshot" style={{color:'gray'}}/> 7 Day Hot Movers (ON)</Button>
              )}
            </span>
            <span style={{marginRight:5}}>
              {this.state.rows7DayLow===false ? (
                <Button style={{padding:10, width: 220, border:'1px solid silver', backgroundColor:'#fff'}} onClick={this.handleRows7DayLow}><ArrowDropDown  className="iconspace-Whatshot" style={{color:'gray'}}/> 7 Day Laggards</Button>
              ) : (
                <Button style={{padding:10, width: 220,border:'1px solid red',backgroundColor:'#eee'}} onClick={this.handleRows7DayLow}><ArrowDropDown className="iconspace-Whatshot" style={{color:'silver'}}/> 7 Day Laggards (ON)</Button>
              )}
            </span>
          </div>
        </div>

        <div className="MarketDataSection--price-table">
          <MarketDataTickerApi  {...this.state} />
        </div>
      </div>
    );
  }
};


// MarketDataSection.propTypes = {
//   pageOn: PropTypes.string.isRequired
// };

export default MarketDataSection;
