import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import thunk from "redux-thunk";
import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import RouterIndex from "./pages/RouterIndex";
import coinListReducer from "./reducers/coinlist-reducer";
import newsReducer from "./reducers/news-reducer";
import productsReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";
import favoritesReducer from "./reducers/favorites-reducer";

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  coinlist: coinListReducer,
  news: newsReducer,
  favorites: favoritesReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  allReducers,
  {
    products: [{ name: "Bitcoin" }],
    user: "Chris",
    coinlist: [],
    news: "loading",
    favorites: []
  },
  allStoreEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
