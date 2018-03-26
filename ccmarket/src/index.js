import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import './index.css';
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
})


const store = createStore(allReducers, 
	{
    products: [{name:'Bitcoin',}],
    user: 'Chris',
    coinlist: [],
    loading: false
	},
	window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
