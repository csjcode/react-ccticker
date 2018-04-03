import { SHOW_ERROR, SHOW_DATA } from '../actions/news-actions';

export default function newsReducer(state = '', {type,payload}){
	console.log(type);
	switch (type){
		case SHOW_DATA: 
			// console.log(payload.news);
			return payload.news;
		case SHOW_ERROR: 
			return payload.news;
		default: 
			return state;
	}
}
