import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
import Button from "material-ui/Button";
import AccountCircle from "material-ui-icons/AccountCircle";

import SignOutButton from './SignOutPage/SignOutPage';
import * as routes from '../constants/routes'; 

const MenuLogin = ({ authstate }) =>
  <Fragment>
    { authstate
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </Fragment>

const NavigationAuth = () =>
	<SignOutButton />

const NavigationNonAuth = () =>
<Link to="/signin">
  <Button className="MenuAppBar--AppBar-menuButtons-mui">
    <AccountCircle className="iconspace-AccountCircle" /> Sign In
  </Button>
</Link>

export default MenuLogin;