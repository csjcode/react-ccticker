import React, { Component } from 'react';
// import logo from '../images/logo.svg';
// import DataTickerApi from '../../common/DataTickerApi/DataTickerApi';
import './CoinListSection.css';
import LoadingView from '../../common/LoadingView/LoadingView';
import ErrorView from '../../common/ErrorView/ErrorView';
import {Divider, Paper} from 'material-ui'
// import DataTableHead from '../../containers/DataTableHead/DataTableHead';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import numberWithCommas from '../../utils/numberWithCommas';
import {Theaters} from 'material-ui-icons'

const DataTableHead = () => {
	return(
	  <TableHead>
		 <TableRow>
			<TableCell style={{width:50}}>Rank</TableCell> 
			<TableCell style={{width:100}}>Name</TableCell>
			<TableCell style={{width:60}}>Symbol</TableCell> 
			<TableCell style={{width:100}}>USD</TableCell> 
			<TableCell style={{width:400}}>Description</TableCell> 
		 </TableRow>
	  </TableHead>
	);
 }

class CoinListSection extends Component {

	state = { 
		loading: true, 
		coinlist: [] 
	};
 
	componentDidMount() {
	// full url
	  fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
		.then(res => res.json())
		.then(
		coinlist => this.setState(prev => ({ loading: false, coinlist })),
		error => this.setState(prev => ({ loading: false, error }))
		);
	 }

	 renderError = () => <ErrorView />

	 renderLoading = () => <LoadingView />

	 renderCoinList = () => {
		return(
			<div style={{marginTop:30}}>
				<Paper style={{maxWidth:1000, margin:'0 auto', padding:20}}>
					<div style={{marginLeft:30}}>
						<h1>Top 100 Coin List</h1>
						<h4>A descriptive listing of the 100 of the most active cryptocurrencies</h4>
					</div>
					{/* <Table className="DataTickerApi--main-table"> */}
					{/* <DataTableHead /> */}
					{/* <TableBody> */}
					<table style={{padding:20, maxWidth:900}}>
						<tr>
							<th style={{width:50}}></th>
							<th style={{width:150}}></th>
							<th style={{width:50}}></th>
							<th></th>
							<th></th>
						</tr>
						{this.renderTableRows()}
					</table>
					{/* </TableBody> */}
					{/* </Table> */}
				</Paper>
			</div>
		)
	 }
	 
	 renderTableRows(){
		// return(

			return this.state.coinlist.map((data)=>{
				data['24h_volume_usd'] = Math.trunc(data['24h_volume_usd']);
				var date = new Date(data.last_updated*1000);
				date = date.toTimeString();
				date = date.replace(/\(.*\)/,'');
		  
				var price_usd = '$' + parseFloat(data.price_usd).toFixed(2);
		  
				var volume_usd = data['24h_volume_usd']/1000;
		  
				var market_cap_usd_commas = numberWithCommas(data.market_cap_usd);
				var market_cap_usd_commas = '$' + market_cap_usd_commas;
				var price_usd_commas = numberWithCommas(price_usd);
				var volume_usd_commas = numberWithCommas(volume_usd);
		  
				var price_btc = parseFloat(data.price_btc).toFixed(5);
			 
				
				
				return (
					 <tr>
						 <td style={{padding:20, width:50}}>{data.rank}</td>
						 <td style={{padding:20, width:150}}>{data.name}</td>
						 <td style={{padding:20, width:50}}>{data.symbol}</td>
						 <td style={{padding:20, width:50}}>{price_usd_commas}</td>
						 <td style={{padding:20}}>This is a one line description about the particular coin</td>
					 {/* <TableRow key={data.id} className="DataTickerApi--row">
						<TableCell className="DataTickerApi--col text-bigger collapsible">{data.rank}</TableCell>         
						<TableCell className="DataTickerApi--col text-bigger">{data.name}</TableCell> 
						<TableCell className="DataTickerApi--col text-bigger">{data.symbol}</TableCell>
						<TableCell className="DataTickerApi--col">{price_usd_commas}</TableCell> 
						<TableCell className="DataTickerApi--col">description</TableCell> 
					 </TableRow> */}
					 </tr>
				)
			 })

			// var top = this.state.coinlist.Data.filter((item)=> item.id < 100 );
			// return (
			// 			<div>
			// 			  <ul>
			// 					{top.map((item)=> <li> {item.id} - {item.name} </li>)}
			// 			  </ul>
			// 				{/* <h2>Photo ID: </h2> */}
			// 				{/* {top.map((item)=> console.log(item.title))} */}
			// 				{/* {top.map((item)=> console.log(item.id + ' - ' + item.title))} */}
			// 			</div>	
			// )


		// 	<div className="CoinListSection--container">

		// 	<div className="CoinListSection--header">
		// 	Coin List Section
		// 	</div>

		// 	<div className="CoinListSection--subheader fadein">Full List of Coins Available</div>

		// 	<div className="">{this.state.coinlist.Data}</div>

		// 	<div className="CoinListSection--intro">
			
		// 	<p className="large-content">

		// 	</p>
		// 	<p>
		// 		As of December 2017 total market capitalization of cryptocurrencies is bigger than 600 billion USD and record high daily volume is larger than 500 billion USD.

		// 	</p>
		// 	</div>

		// 	<div className="CoinListSection--price-table">
		// 	{/* <DataTickerApi /> */}
		// 	</div>
		
		// </div>
		// )
	 }
	 

	render() {
		if (this.state.loading) {
			return this.renderLoading();
		} else if (this.state.coinlist) {
			return this.renderCoinList();
		} else {
			return this.renderError();
		}
	}

 }
 
 export default CoinListSection;