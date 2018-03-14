import React from 'react';
// import logo from '../images/logo.svg';
import DataTickerApi from '../../common/DataTickerApi/DataTickerApi';
import './ContentSection.css';
import PropTypes from 'prop-types';

const ContentSection = (props) => {
   return (
     <div className="ContentSection--container">

      <div className="ContentSection--header">
        Coin.API.cc Market Tracker
      </div>

      <div className="ContentSection--subheader fadein">Watch this page for Coin market updates.</div>

      <div className="ContentSection--intro">
        
        <p className="large-content">
          <b>BETA:</b>This is an experimental service. Cryptocurrencies are used primarily outside existing banking and governmental institutions and are exchanged over the Internet. While these alternative, decentralized modes of exchange are in the early stages of development, they have the unique potential to challenge existing systems of currency and payments. 
        </p>
      </div>

      <div className="ContentSection--price-table">
        <DataTickerApi />
      </div>
     
     </div>
   )
 }

ContentSection.propTypes = {
  pageOn: PropTypes.string.isRequired,
};
 
 export default ContentSection;