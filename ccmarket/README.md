

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



