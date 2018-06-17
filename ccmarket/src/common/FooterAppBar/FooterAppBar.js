import React from 'react';
import './FooterAppBar.css';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
// import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
// import LocationOnIcon from 'material-ui-icons/LocationOn';
import Link from "react-router-dom/Link";

 class FooterAppBar extends React.Component {
   state = {
     value: 0,
   };
 
   handleChange = (event, value) => {
     this.setState({ value });
   };
 
   render() {
     const { classes } = this.props;
     const { value } = this.state;
 
     return (
       <BottomNavigation
         value={value}
         onChange={this.handleChange}
         showLabels
         className="BottomNavigation--container"
       >
         {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
         <Link to="/favorites"><BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /></Link>
         {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
       </BottomNavigation>
     );
   }
 }
 
//  FooterAppBar.propTypes = {
//    classes: PropTypes.object.isRequired,
//  };
 
 export default FooterAppBar;