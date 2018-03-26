import { UPDATE_COINLIST } from '../actions/coinlist-actions';
export default function coinListReducer(state = '', {type,payload}){
	switch (type){
		case UPDATE_COINLIST: 
			return payload.coinlist;
		default: 
			return state;
	}
}

