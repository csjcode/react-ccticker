import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow } from 'material-ui/Table';

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

 export default DataTableHead;
