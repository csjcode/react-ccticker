import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import RouterIndex from "../../pages/RouterIndex";
import CoinListPage from "./CoinListPage";

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<RouterIndex>
			<CoinListPage pageOn="coinlist" />
		</RouterIndex>
	, div);
	// ReactDOM.unmountComponentAtNode(div);
 });
 