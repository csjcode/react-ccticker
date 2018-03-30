import { UPDATE_COINLIST, CLEAR_COINLIST, SHOW_ERROR, SHOW_DATA } from '../actions/coinlist-actions';

export default function coinlistReducer(state = '', {type,payload}){
	console.log(type);
	switch (type){
		case UPDATE_COINLIST: 
		console.log(payload.coinlist);
			return payload.coinlist;
			case CLEAR_COINLIST: 
				return payload.coinlist;
		case SHOW_DATA: 
			// console.log(payload.coinlist);
			return payload.coinlist;
		case SHOW_ERROR: 
			return payload.coinlist;
		default: 
			return state;
	}
}
