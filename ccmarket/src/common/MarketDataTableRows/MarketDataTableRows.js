import React, {Component} from 'react';
import numberWithCommas from '../../utils/numberWithCommas';
import SimpleModalWrapped from '../MarketDataModal/MarketDataModal';

class MarketDataTableRows extends Component {

	render(props) {
		return this.props.data.map((data)=>{
			data['24h_volume_usd'] = Math.trunc(data['24h_volume_usd']);
			var date = new Date(data.last_updated*1000);
			date = date.toTimeString();
			date = date.replace(/\(.*\)/,'');
	  
			var price_usd = '$' + parseFloat(data.price_usd).toFixed(2);
	  
			var volume_usd = data['24h_volume_usd']/1000;
	  
			var market_cap_usd_commas = numberWithCommas(data.market_cap_usd);
			market_cap_usd_commas = '$' + market_cap_usd_commas;
			var price_usd_commas = numberWithCommas(price_usd);
			var volume_usd_commas = numberWithCommas(volume_usd);
	  
			var price_btc = parseFloat(data.price_btc).toFixed(5);
			
			
			return (
				<SimpleModalWrapped 
					key={data.rank}
					rank={data.rank} 
					name={data.name} 
					symbol={data.symbol} 
					price_usd_commas={price_usd_commas} 
					percent_change_1h = {data.percent_change_1h} 
					percent_change_24h = {data.percent_change_24h}
					percent_change_7d = {data.percent_change_7d} 
					volume_usd_commas = {volume_usd_commas} 
					market_cap_usd_commas = {market_cap_usd_commas} 
					price_btc = {price_btc} 
					date = {date} 
					onlyFavorites = {this.props.onlyFavorites}
				/>				 
			)
		 })
	}
}

 export default MarketDataTableRows;
 