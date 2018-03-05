import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import coinlist from './reducers/coinlist'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import RouterIndex from './pages/RouterIndex';


let store = createStore(
  coinlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
