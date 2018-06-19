import React from 'react';
import Button from "material-ui/Button";
import { auth } from '../../firebase';

const SignOutButton = () => 
	// <div style={{margin:100}}>
	<Button className="MenuAppBar--AppBar-menuButtons-mui"
		onClick={auth.doSignOut}
	>
		Sign Out
	</Button>
//   </div>
  

export default SignOutButton;