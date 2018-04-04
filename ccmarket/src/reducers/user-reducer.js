import { UPDATE_USER, SHOW_ERROR, SHOW_DATA } from "../actions/user-actions";

export default function userReducer(state = "", { type, payload }) {
  // console.log(type);
  switch (type) {
    case UPDATE_USER:
      console.log(payload.user);
      return payload.user;
    case SHOW_DATA:
      // console.log(payload.coinlist);
      return payload.coinlist;
    case SHOW_ERROR:
      return payload.user;
    default:
      return state;
  }
}
