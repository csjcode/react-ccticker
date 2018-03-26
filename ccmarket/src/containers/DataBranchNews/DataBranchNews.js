import React, { Component, Fragment } from 'react';
import './DataBranchNews.css';
import LoadingView from '../../common/LoadingView/LoadingView';
import ErrorView from '../../common/ErrorView/ErrorView';
import NewsDataView from '../../common/NewsDataView/NewsDataView';
import newsapikey from '../../private/newsapikey';

const date = new Date();
const y = date.getFullYear();
const m = date.getMonth()+1;
const d = date.getDate();
// const d1 = date.getDate()-1;
// const d2 = date.getDate()-2;
// const d7 = date.getDate()-7;
const dateline = `${y}-${m}-${d}`;
// const dateline2 = `${y}-${m}-${d2}`;
// const dateline7 = `${y}-${m}-${d7}`;

class DataBranchNews extends Component {
	state = {
	  loading: true
	}

	componentDidMount(props){

	  var url = 'https://newsapi.org/v2/everything?' +
	  'q=' + this.props.query +  '&' +
	  'from=2018-03-15&' +
	  'sortBy=popularity&' +
	  'apiKey=' + newsapikey;
 
	  fetch(url)
	  .then(res => res.json())
	  .then(
		 data => this.setState(prevState => ({ loading: false, data})),
		 error => this.setState(prevState => ({ loading: false, error }))
	  );
	}
 
	render(){
	  if (this.state.loading) {
		 return <LoadingView />;
	  } else if (this.state.data) {
	 	 return <NewsDataView data={this.state.data} limit={this.props.limit}/>    
	  } else {
		 return <ErrorView />;
	  }
	};
 
}

export default DataBranchNews;