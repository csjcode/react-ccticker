import React, {Component} from "react";
import MarketDataTickerApi from "../../common/MarketDataTickerApi/MarketDataTickerApi";
import "./MarketDataSection.css";
import Button from "material-ui/Button";
// import PropTypes from "prop-types";

class MarketDataSection extends Component {

  state = {
    onlyFavorites:false
  }

  handleFavoriteRows = () => {
    // alert('button clicked');
    return this.setState(prevState=>({onlyFavorites: !this.state.onlyFavorites}));
    // return alert(this.state.onlyFavorites);
  }

  render(props){

    var classNameFavorites = this.state.onlyFavorites ? 'click-state' : 'base-state';

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
            {this.state.onlyFavorites===false ? (
              <Button style={{padding:10, width: 200, border:'1px solid silver'}} onClick={this.handleFavoriteRows}>View Favorites Only</Button>
            ) : (
              <Button style={{padding:10, width: 200,border:'1px solid red'}} onClick={this.handleFavoriteRows}>View Full List</Button>
            )}
            
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
