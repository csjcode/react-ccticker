import React, { Component, Fragment } from 'react';
import "../MarketDataModal/MarketDataModal.css";
import Favorite from "material-ui-icons/Favorite";

function FavoriteProcess(props){
	if(props.saved===true){
		return <Favorite className="MarketDataModal--Favorite-icon-saved" />
	} else {
		return <Favorite className="MarketDataModal--Favorite-icon" />
	}
		 
}


export default FavoriteProcess
