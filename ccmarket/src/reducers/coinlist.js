const coinlist = (state = [], action) => {
	switch (action.type) {
	  case 'ADD_COINLIST':
		 return {
				coinlist: coinlist,
				loading: false
			}
	  default:
		 return state
	}
}

export default coinlist