import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { PasswordForgetLink } from '../PasswordForgetPage/PasswordForgetPage';
import { SignUpLink } from './../SignUpPage/SignUpPage';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import AccountCircle from "material-ui-icons/AccountCircle";

const SignInPage = ({ history }) =>
  <div style={{margin:'50 auto', width:'100%', textAlign:'center'}}>
    <AccountCircle style={{color:'green',width:100,height:100}} /> 
    <h3>Sign In</h3>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
      {/* style={{marginLeft:10, paddingLeft:10,paddingRight:10,paddingTop:10, paddingBottom:10}} */}
        <div style={{margin:10}}>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
            style={{marginLeft:10, paddingLeft:10,paddingRight:10,paddingTop:10, paddingBottom:10}}
          />
        </div>
        <div style={{margin:10}}>
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
            style={{marginLeft:10, paddingLeft:10,paddingRight:10,paddingTop:10, paddingBottom:10}}
          />
        </div>
        <div style={{margin:10}}>
          <button 
            disabled={isInvalid} 
            type="submit"
            style={{backgroundColor:'#00a7ff', color: 'white', marginLeft:7, marginTop:20,paddingLeft:12,paddingRight:12,paddingTop:8, paddingBottom:8}}
          >
            Sign In
          </button>
        </div>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};