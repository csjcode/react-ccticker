// import $ from 'jquery';

export const UPDATE_COINLIST = 'coinlist:updateCoinlist';
export const CLEAR_COINLIST = 'coinlist:clearCoinlist';
export const SHOW_ERROR = 'coinlist:showError';
export const SHOW_DATA = 'coinlist:showData';

export function updateCoinlist(newCoinlist){
	return {
		type: UPDATE_COINLIST,
		payload: {
			coinlist: newCoinlist
		}
	}
}

export function clearCoinlist(){
	return {
		type: CLEAR_COINLIST,
		payload: {
			coinlist: []
		}
	}
}

export function showError(){
	return {
		type: SHOW_ERROR,
		payload: {
			user: 'ERROR!'
		}
	}
}


export function showData(data){
	// console.log('Actions: ' + data);
	return {
		type: SHOW_DATA,
		payload: {
			coinlist: data
		}
	}
}

export const apiRequest = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(data => data.json())
	.then(data => {
		// console.log(data);
		return dispatch(showData(JSON.parse(JSON.stringify(data))));
	});
}
