import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import RouterIndex from './pages/RouterIndex';

ReactDOM.render((
   <BrowserRouter>
    <RouterIndex />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
