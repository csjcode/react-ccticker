import  React from 'react';
import './LoadingView.css';

const LoadingView = () => {
	return(
		// <div className="LoadingView--container">Loading...</div>
		<div className="LoadingView--container">
			<div className="loading">
				<p>Loading...</p>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
				<div className="loading-bar"></div>
			</div>
		</div>
	);
 }

 export default LoadingView;