import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import coinListReducer from "../reducers/coinlist-reducer";
import newsReducer from "../reducers/news-reducer";
import productsReducer from "../reducers/products-reducer";
import userReducer from "../reducers/user-reducer";
import favoritesReducer from "../reducers/favorites-reducer";
import thunk from "redux-thunk";

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

 export default  store;