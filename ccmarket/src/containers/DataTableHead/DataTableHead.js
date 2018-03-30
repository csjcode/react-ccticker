import  React from 'react';
import { TableCell, TableHead, TableRow } from 'material-ui/Table';
import './DataTableHead.css';

const DataTableHead = () => {
	return(
	  <TableHead>
		 <TableRow>
			<TableCell className="DataTickerApi--col-head collapsible" style={{width:50}}>Rank</TableCell> 
			<TableCell className="DataTickerApi--col-head" style={{width:100}}>Name</TableCell>
			<TableCell className="DataTickerApi--col-head" style={{width:60}}>Symbol</TableCell> 
			<TableCell className="DataTickerApi--col-head" style={{width:100}}>USD</TableCell> 
			<TableCell className="DataTickerApi--col-head" style={{width:60}}>1 Hr &Delta;</TableCell> 
			<TableCell className="DataTickerApi--col-head" style={{width:60}}>24 Hr &Delta;</TableCell> 
			<TableCell className="DataTickerApi--col-head collapsible" style={{width:60}}>7 Day &Delta;</TableCell>
			<TableCell className="DataTickerApi--col-head collapsible" style={{width:100}}>Volume (1k)</TableCell> 
			<TableCell className="DataTickerApi--col-head collapsible" style={{width:100}}>Market Cap</TableCell> 
			<TableCell className="DataTickerApi--col-head collapsible" style={{width:100}}>BTC</TableCell> 
 
			<TableCell className="DataTickerApi--col-head collapsible" style={{width:80}}>Updated</TableCell> 
		 </TableRow>
	  </TableHead>
	);
 }

 export default DataTableHead;