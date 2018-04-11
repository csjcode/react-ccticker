import { SHOW_ERROR, SHOW_DATA, SHOW_LOADING } from "../actions/news-actions";

export default function newsReducer(state = "", { type, payload }) {
  switch (type) {
    case SHOW_DATA:
      // console.log(payload.news);
      return payload.news;
    case SHOW_LOADING:
      console.log(payload.loading);
      return payload.loading;
    case SHOW_ERROR:
      return payload.news;
    default:
      return state;
  }
}
