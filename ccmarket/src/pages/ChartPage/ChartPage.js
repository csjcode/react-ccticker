import React, { Component, Fragment } from 'react';
import './ChartPage.css';
import ChartPageContent from '../../containers/ChartPageContent/ChartPageContent'
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import {DeviceHub} from 'material-ui-icons'



class ChartPage extends Component {

	componentDidMount() {
      
      fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20")
      .then(res => res.json())
      .then(
        data => this.setState(prev => ({ loading: false, data })),
        error => this.setState(prev => ({ loading: false, error }))
      );
     } 

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

					<ChartPageContent />


				</div>

	
			</Fragment>
		)
	}
}

export default ChartPage
