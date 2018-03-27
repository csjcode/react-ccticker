import  React from 'react';
import Table, { TableBody } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DataTableHead from '../../containers/DataTableHead/DataTableHead';
import DataTableRows from '../DataTableRows/DataTableRows';
// import PropTypes from 'prop-types';

const DataView = (props) => (
	<div>
	  <Paper className="DataTickerApi--main-wrapper-paper">
		 <Table className="DataTickerApi--main-table">
			<DataTableHead />
			<TableBody>
			  <DataTableRows {...props} />
			</TableBody>
		 </Table>
	  </Paper>
	</div>
 );

 export default DataView;