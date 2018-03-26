export const UPDATE_COINLIST = 'coinlist:updateCoinlist';
export function updateCoinlist(newCoinlist){
	return {
		type: UPDATE_COINLIST,
		payload: {
			coinlist: newCoinlist
		}
	}
}