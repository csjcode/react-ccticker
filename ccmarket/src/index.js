import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import RouterIndex from './pages/RouterIndex';
import coinListReducer from './reducers/coinlist-reducer';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
	coinlist: coinListReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  allReducers, 
	{
    products: [{name:'Bitcoin'}],
    user: 'Chris',
    coinlist: []
  },
  allStoreEnhancers
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
