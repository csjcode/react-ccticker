export const addCoinlist = coinlist => {
	return {
		type: 'ADD_COINLIST',
		coinlist: coinlist,
		loading: false
	}
 }
