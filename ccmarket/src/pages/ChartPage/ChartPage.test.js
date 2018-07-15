import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./ChartPage.css";
import ChartPageContent from "../../containers/ChartPageContent/ChartPageContent";

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ChartPageContent />, div);
	// ReactDOM.unmountComponentAtNode(div);
 });
 