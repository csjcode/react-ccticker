const coinlist = (state = [], action) => {
	switch (action.type) {
	  case 'ADD_COINLIST':
		 return {
				coinlist: coinlist,
				loading: false,
				item: 1
			}
	  default:
		 return state
	}
}

export default coinlist