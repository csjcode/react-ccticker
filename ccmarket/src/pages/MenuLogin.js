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
  <Fragment>
    <SignOutButton/>
    <Link to="/account" style={{marginLeft:10}}>
      <Button className="MenuAppBar--AppBar-menuButtons-mui">
        <AccountCircle className="iconspace-AccountCircle" /> Account
      </Button>
    </Link>
  </Fragment>

const NavigationNonAuth = () =>
<Fragment>
  <Link to="/signin">
    <Button className="MenuAppBar--AppBar-menuButtons-mui">
      <AccountCircle className="iconspace-AccountCircle" style={{color:'green'}} /> Sign In
    </Button>
  </Link>
  <Link to="/account">
    <Button className="MenuAppBar--AppBar-menuButtons-mui">
      <AccountCircle className="iconspace-AccountCircle" /> Account
    </Button>
  </Link>
</Fragment>


export default MenuLogin;