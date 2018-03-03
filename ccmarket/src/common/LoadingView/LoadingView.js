import  React, { Component } from 'react';
import './LoadingView.css';

const LoadingView = () => {
	return(
		// <div className="LoadingView--container">Loading...</div>
		<div className="LoadingView--container">
			<p>Loading...</p>
			<div class="loading">
				<div class="loading-bar"></div>
				<div class="loading-bar"></div>
				<div class="loading-bar"></div>
				<div class="loading-bar"></div>
			</div>
		</div>
	);
 }

 export default LoadingView;