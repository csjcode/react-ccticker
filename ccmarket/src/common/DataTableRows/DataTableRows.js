import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import numberWithCommas from '../../utils/numberWithCommas';

const DataTableRows = (props) => {

	return props.data.map((data)=>{
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
			<TableRow key={data.id} className="DataTickerApi--row">
			  <TableCell className="DataTickerApi--col text-bigger collapsible">{data.rank}</TableCell>         
			  <TableCell className="DataTickerApi--col text-bigger">{data.name}</TableCell> 
			  <TableCell className="DataTickerApi--col text-bigger">{data.symbol}</TableCell>
			  <TableCell className="DataTickerApi--col">{price_usd_commas}</TableCell> 
 
			  <TableCell className="DataTickerApi--col ">
			  {data.percent_change_1h > 0 ? (
				 <span style={{color:'green'}}>{data.percent_change_1h}%</span>
			  ) : (
				 <span style={{color:'red'}}>{data.percent_change_1h}%</span>
			  )}
			  </TableCell>
			  <TableCell className="DataTickerApi--col ">
			  {data.percent_change_24h > 0 ? (
				 <span style={{color:'green'}}>{data.percent_change_24h}%</span>
			  ) : (
				 <span style={{color:'red'}}>{data.percent_change_24h}%</span>
			  )}
			  </TableCell>
			  <TableCell className="DataTickerApi--col collapsible">
			  {data.percent_change_7d > 0 ? (
				 <span style={{color:'green'}}>{data.percent_change_7d}%</span>
			  ) : (
				 <span style={{color:'red'}}>{data.percent_change_7d}%</span>
			  )}
			  </TableCell>
			  <TableCell className="DataTickerApi--col collapsible">{volume_usd_commas}</TableCell> 
			  <TableCell className="DataTickerApi--col collapsible">{market_cap_usd_commas}</TableCell> 
			  <TableCell className="DataTickerApi--col collapsible">{price_btc}</TableCell>
			  <TableCell className="DataTickerApi--col collapsible">{date}</TableCell>
			</TableRow>
	  )
	})
 }

 export default DataTableRows;
 