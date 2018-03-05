import  React, { Component } from 'react';
import './LoadingView.css';

const LoadingView = () => {
	return(
		// <div className="LoadingView--container">Loading...</div>
		<div className="LoadingView--container">
			<div class="loading">
				<p>Loading...</p>
				<div class="loading-bar"></div>
				<div class="loading-bar"></div>
				<div class="loading-bar"></div>
				<div class="loading-bar"></div>
			</div>
		</div>
	);
 }

 export default LoadingView;