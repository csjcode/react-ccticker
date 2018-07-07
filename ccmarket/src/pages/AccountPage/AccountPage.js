import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import Button from "material-ui/Button";
import AccountCircle from "material-ui-icons/AccountCircle";
import {Divider} from 'material-ui'
import {LaptopChromebook} from 'material-ui-icons'

class AccountPage extends Component {
	componentWillMount(props) {
		
	}
	render(props) {
		return (
			<Fragment>
				{ this.props.authstate
					? <AccountPageAuth />
					: <AccountPageNoAuth />
				}
			</Fragment>
		)
	}
}


const AccountPageNoAuth = ({ authstate }) =>
<Fragment>
	<div style={{margin:'50 auto', width:'100%', textAlign:'center'}}>
		<h3>Account Page not active - You must log in</h3>
		<div style={{margin:20}}>
			<Link to="/signin">
				<Button className="MenuAppBar--AppBar-menuButtons-mui">
					<AccountCircle className="iconspace-AccountCircle" /> Sign In
				</Button>
			</Link>
		</div>
	</div>
</Fragment>

const AccountPageAuth = ({ authstate }) =>
  <Fragment>
		 <div style={{padding:20}}>
			 <h3>Account Page active</h3>
			<p>We'll be filling in some personalized info here.</p>
			<ul>
				<li>Account Details</li>
				<li>Account Subscriptions</li>
				<li>Account Privacy</li>
				<li>Account Keyword Monitoring</li>
			</ul>
		 </div>
  </Fragment>

export default AccountPage;