# react-ccticker
Experimenting with a Cryptocurrency ticker in React

**Right now, most of the action is in react-ccticker/ccmarket/src/ which is for the React web app. After it gets a bit further along I'll finish up the React Native for mobile**


For current working directories see:
https://github.com/csjcode/react-ccticker/tree/master/ccmarket/src


Demo (note: daily dev in progress, some parts not available while I work on them!!!):
http://coin.api.cc/

## Coin.API.cc

I'll fill this in more when I get a chance.


### This is an ongoing project in development, not a finished product yet. 

* I have currently done the API calls for (1) market data, (2) coin descriptions, News API
* The data collection and processing for each.
* Adding React-Redux scaffolding, now filling in some actions/reducers 
* Multiple pages for Coin Market, Coin List Descriptions, Coin modals, Coin News
* React Router 4  
* React Native interface (initial, needs design work)
* Working on Node.js middleware for aggregating APIs

### Preliminary ideas for mobile app mashup, and general roadmap:

* Front-end UI is React Native.
* Backend Node.js cryptocurrency API/JSON retrieval
* Combine CryptoCompare, other APIs and News API
* Add in "Info Dashboard" for forums, BitcoinTalk RSS Reddit RSS feed, Wikipedia JSON
* See other financial market apps for ideas on charts
* Check out Node.js middleware possibilities
