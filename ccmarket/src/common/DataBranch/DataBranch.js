
import React from 'react';
import LoadingView from '../LoadingView/LoadingView';
import ErrorView from '../ErrorView/ErrorView';
import DataView from '../DataView/DataView';

const DataBranch = ({ loading, data }) => {
	if (loading) {
	  return <LoadingView />;
	} else if (data) {
	  return <DataView data={data} />;    
	} else {
	  return <ErrorView />;
	}
 };

 export default DataBranch;