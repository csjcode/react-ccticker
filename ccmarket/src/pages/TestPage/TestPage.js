import React, { Component, Fragment } from 'react';
import './TestPage.css';
import DataSymbol from '../../containers/DataSymbol/DataSymbol'
import {Button, Divider} from 'material-ui';
import {connect} from 'react-redux';
import { updateUser } from '../../actions/user-actions';
import { updateCoinlist } from '../../actions/coinlist-actions'; 

class TestPage extends Component {
	constructor(props){
		super(props);
		this.onUpdateUser = this.onUpdateUser.bind(this);
		this.onUpdateCoinlist = this.onUpdateCoinlist.bind(this);
		this.onUpdateUserInput = this.onUpdateUserInput.bind(this);
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
		console.log(this.props);
		return (
			<Fragment>
				<div style={{padding:20}}>
					<DataSymbol />
				</div>
				<div style={{padding:20}}>
					<Button onClick={this.onUpdateUser}>Update User</Button>
				</div>
				<div tyle={{padding:20}}>
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

const mapStateToProps = state => ({
	products: state.products,
	user: state.user,
	coinlist: state.coinlist
});

const mapActionsToProps = {
	onUpdateUser: updateUser,
	onUpdateUserInput: updateUser,
	onUpdateCoinlist: updateCoinlist
};

export default connect(mapStateToProps,mapActionsToProps)(TestPage);
