import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import './DataBranchNews.css';
import LoadingView from '../../common/LoadingView/LoadingView';
import ErrorView from '../../common/ErrorView/ErrorView';
import NewsDataView from '../../common/NewsDataView/NewsDataView';
import newsapikey from '../../private/newsapikey';
import { apiNewsRequest, showLoading } from '../../actions/news-actions';
// import { newsApiRequest } from '../../actions/news-actions';


// const d1 = date.getDate()-1;
// const d2 = date.getDate()-2;
// const d7 = date.getDate()-7;

// const dateline2 = `${y}-${m}-${d2}`;
// const dateline7 = `${y}-${m}-${d7}`;

class DataBranchNews extends Component {
	state = {
	  loading: true
	}

	componentDidMount(props){

		var date = new Date();
		var yesterday = date - 1000 * 60 * 60 * 24 * 4; 
		var date = new Date(yesterday);
		const y = date.getFullYear();
		const m = date.getMonth()+1;
		const d = date.getDate();
		const d5 = date.getDate()-5;
		const dateline = `${y}-${m}-${d}`;

		this.props.onNewsApiRequest(this.props.query,dateline,newsapikey);


		// this.props.onNewsApiRequest();

	}
 
	render(){
	  if (this.props.data==='loading') {
		 return <LoadingView />;
	  } else if (this.props.data) {
	 	 return <NewsDataView data={this.props.data} limit={this.props.limit}/>    
	  } else {
		 return <ErrorView />;
	  }
	};
 
}

const mapStateToProps = (state,props) => {
	return {
		products: state.products,
		data: state.news,
		loading: state.loading
	}
};

const mapDispatchToProps = {
	onNewsApiRequest: apiNewsRequest
};


export default connect(mapStateToProps,mapDispatchToProps)(DataBranchNews);
