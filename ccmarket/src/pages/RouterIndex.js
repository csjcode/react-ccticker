import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import HeaderSection from '../containers/HeaderSection/HeaderSection';
import FooterSection from '../containers/FooterSection/FooterSection';
import App from '../containers/App';
import logo from '../images/logo.svg';
import grey from 'material-ui/colors/grey';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
   palette: {
     primary: grey,
     secondary: green,
   },
   status: {
     danger: 'orange',
   },
 });

const RouterIndex = (props) => {
   return (
      <MuiThemeProvider theme={theme}>
         <div>
            <Reboot />
            {/* <AlertSection /> */}
            <HeaderSection />
            <Switch>
               <Route exact path="/" component={App}/>
               <Route path="/market" component={App}/>
               <Route path="/list" component={App}/>
               <Route path="/faq" component={App}/>
               <Route path="/market" component={App}/>
               <Route path="/patents" component={App}/>
               <Route path="/updates" component={App}/>
            </Switch>
            <FooterSection />
         </div>
      </MuiThemeProvider>
   )
}

export default RouterIndex;