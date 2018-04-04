export const UPDATE_USER = "users:updateUser";
export const SHOW_ERROR = "users:showError";
export const SHOW_DATA = "users:showData";

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: "ERROR!"
    }
  };
}

export function showData(data) {
  // console.log('Actions: ' + data);
  return {
    type: SHOW_DATA,
    payload: {
      coinlist: data
    }
  };
}

// fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')

export const apiRequest = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(data => data.json())
    .then(data => {
      // console.log(data);
      return dispatch(showData(JSON.stringify(data)));
    });
};
