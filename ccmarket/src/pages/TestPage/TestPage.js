import React, { Component, Fragment } from 'react';
import './TestPage.css';
import DataSymbol from '../../containers/DataSymbol/DataSymbol'
import {Button} from 'material-ui';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { updateUser, apiRequest } from '../../actions/user-actions';
import { updateCoinlist } from '../../actions/coinlist-actions'; 

class TestPage extends Component {
	constructor(props){
		super(props);
		this.onUpdateUser = this.onUpdateUser.bind(this);
		this.onUpdateCoinlist = this.onUpdateCoinlist.bind(this);
		this.onUpdateUserInput = this.onUpdateUserInput.bind(this);
	}	

	componentDidMount(){
		this.props.onApiRequest();
	}
	
	onUpdateUser(){
		this.props.onUpdateUser('csjower');
	}

	onUpdateCoinlist(){
		this.props.onUpdateCoinlist('dataHere');
	}

	onUpdateUserInput(event){
		this.props.onUpdateUser(event.target.value);
	}

	render() {
		// console.log(this.props);
		return (
			<Fragment>
				<div style={{padding:20}}>
					<DataSymbol />
				</div>
				<div style={{padding:20}}>
					<Button onClick={this.onUpdateUser}>Update User</Button>
				</div>
				<div style={{padding:20}}>
					<input onChange={this.onUpdateUserInput} />
				</div>
				<div style={{padding:20}}>
					<Button onClick={this.onUpdateCoinlist}>Update Coinlist</Button>
				</div>
				<div style={{padding:20}}>
					{this.props.user}
				</div>
				<div style={{padding:20}}>
					{this.props.coinlist}
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = (state,props) => {
	// console.log(props);
	return {
		products: state.products,
		user: state.user,
		coinlist: state.coinlist,
		coinlistFavorites: `${state.user} ${props.myCoins}`
	}
};

const mapActionsToProps = {
	onUpdateUser: updateUser,
	onUpdateUserInput: updateUser,
	onUpdateCoinlist: updateCoinlist,
	onApiRequest: apiRequest
};
// onApiRequest: apiRequest
// const mapActionsToProps = (dispatch, props) => {
// 	// console.log(props);
// 	return bindActionCreators({
// 		onUpdateUser: updateUser,
// 		onUpdateUserInput: updateUser,
// 		onUpdateCoinlist: updateCoinlist
// 	}, dispatch)
// };

// const mergeProps = (propsFromState,propsFromDispatch,ownProps) => {
// 	console.log(propsFromState,propsFromDispatch,ownProps)
// 	return propsFromState;
// }

// export default connect(mapStateToProps,mapActionsToProps,mergeProps)(TestPage);

export default connect(mapStateToProps,mapActionsToProps)(TestPage);
