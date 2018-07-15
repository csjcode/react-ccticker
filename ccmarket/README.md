

# CCMarket React Web App


### React Market Tracking App

I'm working on both a React and React Native app.

This repo is the React (web) version. which is using Material-UI.

Some features:

* Modern React 16 interface 
* D3.js VX visualizations in SVG
* React Redux statem management and API Fetch integration
* News API integration
* CoinCompare API integration
* Individual Symbol information
* Market CoinInfo integration 
* Material-UI design framework
* Wrapped HOC Modals
* Favorites (in testing)

...and more 

#### Core of the API Data Table Display
* MarketPage
  * MarketDataSection > MarketDataTickerApi > 
  * MarketDataBranch > MarketDataView [needs propname for filters] >
  * MarketDataTableRows > 
  * MarketDataModal [data transforms are done here]


#### Notes & References

* Local Storage: 

```javascript
localStorage.setItem("names", JSON.stringify(names));
var storedNames = JSON.parse(localStorage.getItem("names"));
```

```javascript
JSON.parse('{}'); // {}
JSON.parse('true'); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null'); // null
```

Firebase:

`https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/`

`npm install firebase react-router-dom`

In src/constants/routes.js file:
```javascript

export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const LANDING = '/';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const PASSWORD_FORGET = '/pw-forget';

```

In Firebase

* “Authentication”. 
* “Sign-In Method”
* Enable the authentication with Email/Password
* Copy code from "Web setup" buttone (currently top right)
```

<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "[long number was here]",
    authDomain: "coinapi-2801a.firebaseapp.com",
    databaseURL: "https://coinapi-2801a.firebaseio.com",
    projectId: "coinapi-2801a",
    storageBucket: "coinapi-2801a.appspot.com",
    messagingSenderId: "1092095185403"
  };
  firebase.initializeApp(config);
</script>
```

* authstate props are passed from RouterIndex -> HeaderSection -> MenuAppBar -> MenuLogin 


