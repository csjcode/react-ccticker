import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import store from "./store/store.js";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import RouterIndex from "./pages/RouterIndex";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
