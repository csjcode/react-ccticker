import React, { Component, Fragment } from 'react';
import './DataBranchNews.css';
import LoadingView from '../../common/LoadingView/LoadingView';
import ErrorView from '../../common/ErrorView/ErrorView';
import NewsDataView from '../../common/NewsDataView/NewsDataView';
import newsapikey from '../../private/newsapikey';
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

		const date = new Date();
		const y = date.getFullYear();
		const m = date.getMonth()+1;
		const d = date.getDate();
		const d5 = date.getDate()-5;
		const dateline = `${y}-${m}-${d5}`;

	  var url = 'https://newsapi.org/v2/everything?' +
	  'q=' + this.props.query +  '&' +
	  'from=' + dateline + '&' +
	  'sortBy=popularity&' +
	  'apiKey=' + newsapikey;
 
	  fetch(url)
	  .then(res => res.json())
	  .then(
		 data => this.setState(prevState => ({ loading: false, data})),
		 error => this.setState(prevState => ({ loading: false, error }))
		);
		
		// this.props.onNewsApiRequest();



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





// const mapStateToProps = (state,props) => {
// 	// console.log(props);
// 	return {
// 		products: state.products,
// 		user: state.user,
// 		coinlist: state.coinlist,
// 		coinlistFavorites: `${state.user} ${props.myCoins}`,
// 		apiRequest: props.apiRequest,
// 		clearCoinlist: props.clearCoinlist
// 	}
// };

// const mapDispatchToProps = {
// 	onUpdateUser: updateUser,
// 	onUpdateUserInput: updateUser,
// 	onApiRequest: apiRequest,
// 	onClearCoinlist: clearCoinlist
// };

// export default connect(mapStateToProps,mapDispatchToProps)(TestPage);