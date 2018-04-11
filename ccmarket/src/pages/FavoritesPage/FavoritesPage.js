import React, { Component } from 'react';
import './FavoritesPage.css';
import productsReducer from '../../reducers/products-reducer'
// import ContentSection from '../containers/ContentSection/ContentSection';


const FavoritesPage = (props) => {
   return (
      <div className="FavoritesPage--container">
        <h2>Favorites</h2>
        <div className="FavoritesPage--container-inner">

          <div className="FavoritesPage--container-favorites">
            <h4>You have not chosen<br />any Favorites</h4>
          </div>

        </div>
      </div>
   )
 }
 

export default FavoritesPage;
