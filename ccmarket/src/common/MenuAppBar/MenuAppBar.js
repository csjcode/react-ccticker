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
import ShowChart from 'material-ui-icons/ShowChart';
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
    // alert('handleMenu - ' + event.currentTarget.id);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuProfile = event => {
    // alert('handleMenuProfile - ' + event.currentTarget.id);
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className='MenuAppBar--AppBar-container' position="fixed" color="#696969">
          <Toolbar>
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
                  onClose={() => this.setState({ anchorEl: null })}
                >
                  <MenuItem onClick={this.handleClose}><Link to="/market">Market Monitor</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to="/coinlist">Coin List</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to="/news">Coin News</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to="/blog">Blog</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to="profile">Profile</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to="/account">My account</Link></MenuItem>
                </Menu>
              <MenuIcon />
            <IconButton 
                className={classes.menuButton} 
                color="contrast" 
                aria-label="Menu"
                aria-owns={anchorEl ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                style={{left:-15,width:30}}
              >


            </IconButton>
            <Typography type="title" color="inherit" className="MenuAppBar--AppBar-container-hamburger">
              Coin.API.cc
            </Typography>
            <div className="MenuAppBar--AppBar-button-container">
              <Link to="/market"><Button className="MenuAppBar--AppBar-menuButtons-mui"> <Whatshot className="iconspace-Whatshot"/> Monitor</Button></Link>

              <Link to="/charts"><Button className="MenuAppBar--AppBar-menuButtons-mui"><ShowChart className="iconspace-ShowChart"/> Charts</Button></Link>  

              <Link to="/coinlist"><Button className="MenuAppBar--AppBar-menuButtons-mui"><InfoOutline className="iconspace-InfoOutline"/> Info</Button></Link>   

              <Link to="/news"><Button className="MenuAppBar--AppBar-menuButtons-mui"><ViewHeadline className="iconspace-ViewHeadline"/> News</Button></Link>  

              <Link to="/blog"><Button className="MenuAppBar--AppBar-menuButtons-mui"><LocalCafe className="iconspace-LocalCafe"/> Blog</Button></Link>  

              </div>

            {/* {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar-profile' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenuProfile}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
               
                <Menu
                  id="menu-appbar-profile"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  // open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )} */}
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