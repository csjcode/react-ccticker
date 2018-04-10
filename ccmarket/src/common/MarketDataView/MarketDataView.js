import  React from 'react';
import Table, { TableBody } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import MarketDataTableHead from '../../containers/MarketDataTableHead/MarketDataTableHead';
import MarketDataTableRows from '../MarketDataTableRows/MarketDataTableRows';
// import PropTypes from 'prop-types';

const MarketDataView = (props) => (
	<div>
	  <Paper className="MarketDataTickerApi--main-wrapper-paper">
		 <Table className="MarketDataTickerApi--main-table">
			<MarketDataTableHead />
			<TableBody>
			  <MarketDataTableRows {...props} />
			</TableBody>
		 </Table>
	  </Paper>
	</div>
 );

 export default MarketDataView;