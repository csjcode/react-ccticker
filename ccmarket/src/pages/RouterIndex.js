import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import HeaderSection from '../containers/HeaderSection/HeaderSection';
import FooterSection from '../containers/FooterSection/FooterSection';
import CoinListPage from './CoinListPage/CoinListPage';
import NewsPage from './NewsPage/NewsPage';
import TestPage from './TestPage/TestPage';
import App from '../containers/App';
import logo from '../images/logo.svg';
import grey from 'material-ui/colors/grey';
import green from 'material-ui/colors/green';
import DataView from '../common/DataView/DataView'

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
            <div style={{minHeight:800}}>
              <Switch>
                <Route exact path="/" render={()=><App pageOn="app" />}/>
                <Route path="/market" render={()=><App pageOn="app" />}/>
                <Route path="/coinlist" render={()=><CoinListPage pageOn="coinlist" />}/>
                <Route path="/news" render={()=><NewsPage pageOn="news" query="Bitcoin"/>}/>
                <Route path="/blog" render={()=><App pageOn="app" />}/>
                <Route path="/updates" render={()=><App pageOn="app" />}/>
                <Route path="/faq" render={()=><App pageOn="app" />}/>
                <Route path="/test" render={()=><TestPage pageOn="test" />}/>
              </Switch>
            </div>
            <FooterSection />
         </div>
      </MuiThemeProvider>
   )
}

export default RouterIndex;