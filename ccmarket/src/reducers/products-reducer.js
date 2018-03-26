export default function productsReducer(state = '', {type,payload}){
	switch (type){
		case 'updateProduct': 
			return payload;
		default: 
			return state;
	}
}


