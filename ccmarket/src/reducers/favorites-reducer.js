import { TOGGLE_FAVORITE, ADD_FAVORITE, REMOVE_FAVORITE, SHOW_ERROR, SHOW_DATA, SHOW_LOADING } from "../actions/favorites-actions";

export default function favoritesReducer(state = "", { type, payload }) {
  console.log(type);
  switch (type) {
	case TOGGLE_FAVORITE:
	// console.log(payload.favorites);
		return payload.favorites;
	case ADD_FAVORITE:
	// console.log(payload.favorites);
		return payload.favorites;
	case REMOVE_FAVORITE:
	// console.log(payload.favorites);
		return payload.favorites;
   case SHOW_DATA:
      // console.log(payload.news);
      return payload.favorites;
   case SHOW_LOADING:
      console.log(payload.loading);
      return payload.loading;
   case SHOW_ERROR:
      return payload.favorites;
    default:
      return state;
  }
}
