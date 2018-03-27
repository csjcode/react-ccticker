// import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';
export function updateUser(newUser){
	return {
		type: UPDATE_USER,
		payload: {
			user: newUser
		}
	}
}


export function apiRequest(){
	return dispatch => {
		fetch('https://api.github.com/users/csjcode')
		.then(data => data.json())
		.then(data => {
			if (data.ok) {
				return console.log(data.json());
			 } else {
				return console.log('Something went wrong');
			 }
		//   console.log('fetching data');
		});
	};
}

