import React, {Component} from 'react';
import './MenuAppBar.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Whatshot from 'material-ui-icons/Whatshot';
import ViewHeadline from 'material-ui-icons/ViewHeadline';
import InfoOutline from 'material-ui-icons/InfoOutline';
import LocalCafe from 'material-ui-icons/LocalCafe';
import Menu, { MenuItem } from 'material-ui/Menu';
import Link from 'react-router-dom/Link';
import {Divider, Icon} from 'material-ui'


const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className='MenuAppBar--AppBar-container' position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Coin.API.cc
            </Typography>
            <div className="MenuAppBar--AppBar-button-container">
              <Link to="/market"><Button raised className="MenuAppBar--AppBar-menuButtons-mui"> <Whatshot className="iconspace"/> Market Monitor</Button></Link>   

              <Link to="/coinlist"><Button raised className="MenuAppBar--AppBar-menuButtons-mui"><InfoOutline className="iconspace"/> List of Coins</Button></Link>   

              <Link to="/news"><Button raised className="MenuAppBar--AppBar-menuButtons-mui"><ViewHeadline className="iconspace"/> Coin News</Button></Link>  

              <Link to="/blog"><Button raised className="MenuAppBar--AppBar-menuButtons-mui"><LocalCafe className="iconspace"/> Blog</Button></Link>  

              </div>

            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);