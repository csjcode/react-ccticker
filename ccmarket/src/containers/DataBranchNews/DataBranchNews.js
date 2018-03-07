import React, { Component, Fragment } from 'react';
import './DataBranchNews.css';
import LoadingView from '../../common/LoadingView/LoadingView';
import ErrorView from '../../common/ErrorView/ErrorView';
import NewsDataView from '../../common/NewsDataView/NewsDataView';
import newsapikey from '../../private/newsapikey';

class DataBranchNews extends Component {
	state = {
	  loading: true
	}
 
	componentDidMount(props){
 
	  var url = 'https://newsapi.org/v2/everything?' +
	  'q=' + this.props.query +  '&' +
	  'from=2018-03-01&' +
	  'sortBy=popularity&' +
	  'apiKey=' + newsapikey;
 
	  fetch(url)
	  .then(res => res.json())
	  .then(
		 data => this.setState(prev => ({ loading: false, data})),
		 error => this.setState(prev => ({ loading: false, error }))
	  );
 
	}
 
	render(){
	  if (this.state.loading) {
		 return <LoadingView />;
	  } else if (this.state.data) {
	  return <NewsDataView data={this.state.data} />    
	  } else {
		 return <ErrorView />;
	  }
	};
 
}

export default DataBranchNews;