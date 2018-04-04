// import $ from 'jquery';

export const SHOW_ERROR = 'news:showError';
export const SHOW_DATA = 'news:showData';
export const SHOW_LOADING = 'news:showLoading';
export const UPDATE_NEWS = 'news:updateNews';
export const CLEAR_NEWS = 'news:clearNews';

export function updateNews(newNews){
	return {
		type: UPDATE_NEWS,
		payload: {
			news: newNews
		}
	}
}

export function clearNews(){
	return {
		type: CLEAR_NEWS,
		payload: {
			news: []
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

export function showLoading(){
	// console.log('Show Loading');
	return {
		type: SHOW_LOADING,
		payload: {
			news: true
		}
	}
}

export function showData(data){
	// console.log('Actions: ' + data);
	return {
		type: SHOW_DATA,
		payload: {
			news: data,
			loading: false
		}
	}
}

export const apiNewsRequest = (query,dateline,newsapikey) => dispatch => {
	var url = 'https://newsapi.org/v2/everything?' +
	'q=' + query +  '&' +
	'from=' + dateline + '&' +
	'sortBy=popularity&' +
	'apiKey=' + newsapikey;

	// dispatch(showLoading())

	// console.log(dateline); 

	fetch(url)
	.then(res => res.json())
	.then(
		data => dispatch(showData(data)),
		error => console.log(error)
	);
}
