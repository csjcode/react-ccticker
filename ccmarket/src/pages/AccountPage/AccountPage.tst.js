import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
	// import "./AccountPage.css";
import AccountPage from "./AccountPage";

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<AccountPage />, div);
	// ReactDOM.unmountComponentAtNode(div);
 });
 