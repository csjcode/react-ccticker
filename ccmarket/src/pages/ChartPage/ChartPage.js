import React, { Component, Fragment } from 'react';
import './ChartPage.css';
import DataSymbol from '../../containers/DataSymbol/DataSymbol'
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import {DeviceHub} from 'material-ui-icons'

class ChartPage extends Component {
	render() {
		return (
			<Fragment>
				<div className="ChartPage--container">
					<div className="ChartPage--heading">
						<h1>Coin Charts</h1>
					</div>
					<div className="ChartPage--subheading">
						<Button>24h</Button> <Button>7 day</Button> <Button>30 day</Button>
					</div>


					<div className="ChartPage--row">
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="ETH" />
							<div className="ChartPage--column-subheading">ETH</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="XRP" />
							<div className="ChartPage--column-subheading">XRP</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BCH" />
							<div className="ChartPage--column-subheading">BCH</div>
						</div>
					</div>

					<div className="ChartPage--row">
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
					</div>

					<div className="ChartPage--row">
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
					</div>

					<div className="ChartPage--row">
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
						<div className="ChartPage--column">
							<DataSymbol width={250} height={120} sym="BTC" />
							<div className="ChartPage--column-subheading">BTC</div>
						</div>
					</div>

				</div>

	
			</Fragment>
		)
	}
}

export default ChartPage
