import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import RouterIndex from './pages/RouterIndex';
import coinListReducer from './reducers/coinlist-reducer';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
	coinlist: coinListReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(allReducers, 
	{
    products: [{name:'Bitcoin',}],
    user: 'Chris',
    coinlist: []
  },
  allStoreEnhancers
);

ReactDOM.render((
  <MuiThemeProvider>
  <Provider store={store}>
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
