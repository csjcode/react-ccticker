import React from "react";
import MarketDataTickerApi from "../../common/MarketDataTickerApi/MarketDataTickerApi";
import "./MarketDataSection.css";
// import PropTypes from "prop-types";

const MarketDataSection = props => {
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
      </div>

      <div className="MarketDataSection--price-table">
        <MarketDataTickerApi />
      </div>
    </div>
  );
};

// MarketDataSection.propTypes = {
//   pageOn: PropTypes.string.isRequired
// };

export default MarketDataSection;
