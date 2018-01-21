import React, { Component } from 'react';
// import logo from '../images/logo.svg';
import DataTickerApi from '../../common/DataTickerApi/DataTickerApi';
import './ContentSection.css';

const ContentSection = (props) => {
   return (
     <div className="ContentSection--container">

      <div className="ContentSection--header">
        Coin.API.cc Market Tracker
      </div>

      <div className="ContentSection--subheader fadein">Watch this page for Coin market updates.</div>

      <div className="ContentSection--intro">
        
        Cryptocurrencies are used primarily outside existing banking and governmental institutions and are exchanged over the Internet. While these alternative, decentralized modes of exchange are in the early stages of development, they have the unique potential to challenge existing systems of currency and payments. As of December 2017 total market capitalization of cryptocurrencies is bigger than 600 billion USD and record high daily volume is larger than 500 billion USD.

        

      </div>

      <div className="ContentSection--price-table">
        <DataTickerApi />
      </div>
     
     </div>
   )
 }
 
 export default ContentSection;