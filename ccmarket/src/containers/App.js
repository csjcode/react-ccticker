import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Reboot from 'material-ui/Reboot';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import green from 'material-ui/colors/green';
import HeaderSection from './HeaderSection/HeaderSection';
import FooterSection from './FooterSection/FooterSection';
import ContentSection from './ContentSection/ContentSection';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const App = (props) => {
   return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Reboot />
        <HeaderSection />
        <ContentSection />
        <FooterSection />
      </div>
     </MuiThemeProvider>
   )
 }
 

export default App;
