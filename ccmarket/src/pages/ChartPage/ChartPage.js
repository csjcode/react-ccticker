import React, { Component, Fragment } from 'react';
import './ChartPage.css';
import DataSymbol from '../../containers/DataSymbol/DataSymbol'
import {DeviceHub} from 'material-ui-icons'

class ChartPage extends Component {
	render() {
		return (
			<Fragment>

				<div className="ChartPage--row">
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
				</div>

				<div className="ChartPage--row">
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
				</div>

				<div className="ChartPage--row">
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
				</div>

				<div className="ChartPage--row">
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
					<div className="ChartPage--column">
						<DataSymbol width={250} height={150} sym="BTC" />
						<div className="ChartPage--column-subheading">BTC</div>
					</div>
				</div>

	
			</Fragment>
		)
	}
}

export default ChartPage
