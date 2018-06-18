import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () => 
	// <div style={{margin:100}}>
	<button
		type="button"
		onClick={auth.doSignOut}
	>
		Sign Out
	</button>
//   </div>
  

export default SignOutButton;