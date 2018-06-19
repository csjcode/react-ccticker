import React, { Component } from "react";
import "./MenuAppBar.css";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Button from "material-ui/Button";
import Favorite from "material-ui-icons/Favorite";
import AccountCircle from "material-ui-icons/AccountCircle";
import MenuIcon from "material-ui-icons/Menu";
import Whatshot from "material-ui-icons/Whatshot";
import ViewHeadline from "material-ui-icons/ViewHeadline";
import InfoOutline from "material-ui-icons/InfoOutline";
import ShowChart from "material-ui-icons/ShowChart";
import Menu, { MenuItem } from "material-ui/Menu";
import Link from "react-router-dom/Link";
import MenuLogin from '../../pages/MenuLogin';
// import * as routes from '../../constants/routes';

// const Navigation = ({ authUser }) =>
//   <div>
//     { authUser
//         ? <NavigationAuth />
//         : <NavigationNonAuth />
//     }
//   </div>

// const NavigationAuth = () =>
// <Link to="/signin">
//   <Button className="MenuAppBar--AppBar-menuButtons-mui">
//     <AccountCircle className="iconspace-AccountCircle" /> Sign In
//   </Button>
// </Link>

// const NavigationNonAuth = () =>
// <Link to="/signin">
//   <Button className="MenuAppBar--AppBar-menuButtons-mui">
//     <AccountCircle className="iconspace-AccountCircle" /> Sign In
//   </Button>
// </Link>



const styles = {
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
    authstate: this.props.authUser
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuProfile = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render(props) {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar
          className="MenuAppBar--AppBar-container"
          position="fixed"
        >
          <Toolbar>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={() => this.setState({ anchorEl: null })}
            >
              <MenuItem onClick={this.handleClose}>
                <Link to="/market">Market Monitor</Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to="/coinlist">Coin List</Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to="/news">Coin News</Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to="/favorites">Favorites</Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to="/signup">Sign Up</Link>
              </MenuItem>
            </Menu>
            <MenuIcon />
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
              aria-owns={anchorEl ? "menu-appbar" : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              style={{ left: -15, width: 30 }}
            />
            <Typography
              type="title"
              color="inherit"
              className="MenuAppBar--AppBar-container-hamburger"
            >
              <Link to="/market" style={{ color: "#000" }}>
                Coin.API.cc
              </Link>
            </Typography>
            <div className="MenuAppBar--AppBar-button-container">

              <Link to="/coinlist">
                <Button className="MenuAppBar--AppBar-menuButtons-mui">
                  <InfoOutline className="iconspace-InfoOutline" /> Info
                </Button>
              </Link>

              <Link to="/market">
                <Button className="MenuAppBar--AppBar-menuButtons-mui">
                  {" "}
                  <Whatshot className="iconspace-Whatshot" /> Monitor
                </Button>
              </Link>

              <Link to="/charts">
                <Button className="MenuAppBar--AppBar-menuButtons-mui">
                  <ShowChart className="iconspace-ShowChart" /> Charts
                </Button>
              </Link>

              <Link to="/news">
                <Button className="MenuAppBar--AppBar-menuButtons-mui">
                  <ViewHeadline className="iconspace-ViewHeadline" /> News
                </Button>
              </Link>

              <Link to="/favorites">
                <Button className="MenuAppBar--AppBar-menuButtons-mui">
                  <Favorite className="iconspace-Favorite" /> Favorites
                </Button>
              </Link>
              

              <MenuLogin {...this.props} />
  
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
