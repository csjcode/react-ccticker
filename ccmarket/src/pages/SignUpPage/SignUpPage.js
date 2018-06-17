import React, { Component } from 'react';
import {
	Link,
	withRouter,
 } from 'react-router-dom';
 import AccountCircle from "material-ui-icons/AccountCircle";

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignUpPage = ({ history }) =>
  <div style={{margin:20, padding:20, width:'100%',textAlign:'center'}}>
    <AccountCircle style={{width:100,height:100}} /> 
	 <h3>Sign Up for Coin.API.cc</h3>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
 };

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value,
});
 

class SignUpForm extends Component {
	constructor(props) {
		super(props);
  
		this.state = { ...INITIAL_STATE };
	 }

  onSubmit = (event) => {
	const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;


    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
		  this.setState(() => ({ ...INITIAL_STATE }));
		  history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {

	const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
	 } = this.state;


    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';	 
	 

	return (
		<div style={{padding:20, width:'100%',textAlign:'center'}}>
			<form onSubmit={this.onSubmit}>
				<div style={{margin:10}}>
					<input
						value={username}
						onChange={event => this.setState(byPropKey('username', event.target.value))}
						type="text"
						placeholder="Full Name"
						style={{marginLeft:10, paddingLeft:10,paddingRight:10,paddingTop:10, paddingBottom:10}}
					/>
					<span style={{color: 'red', marginLeft:5}}>* Required</span>
				</div>
				<div style={{margin:10}}>
					<input
						value={email}
						onChange={event => this.setState(byPropKey('email', event.target.value))}
						type="text"
						placeholder="Email Address"
						style={{marginLeft:10, paddingLeft:10,paddingRight:10,paddingTop:10, paddingBottom:10}}
					/>
					<span style={{color: 'red', marginLeft:5}}>* Required</span>
				</div>
				<div style={{margin:10}}>	
					<input
						value={passwordOne}
						onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
						type="password"
						placeholder="Password"
						style={{marginLeft:10, paddingLeft:10,paddingRight:10,paddingTop:10, paddingBottom:10}}
					/>
					<span style={{color: 'red', marginLeft:5}}>* Required</span>
				</div>
				<div style={{margin:10}}>
					<input
						value={passwordTwo}
						onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
						type="password"
						placeholder="Confirm Password"
						style={{marginLeft:10, paddingLeft:10,paddingRight:10,paddingTop:10, paddingBottom:10}}
					/>
					<span style={{color: 'red', marginLeft:5}}>* Required</span>
				</div>
				<div style={{margin:10}}>
					<button 
						disabled={isInvalid} 
						type="submit" 
						style={{backgroundColor:'#00a7ff', color: 'white', marginLeft:7, marginTop:20,paddingLeft:12,paddingRight:12,paddingTop:8, paddingBottom:8}}>
						Sign Up for Coin.API.cc
					</button>
				</div>

			{ error && <p>{error.message}</p> }
			</form>
		</div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};