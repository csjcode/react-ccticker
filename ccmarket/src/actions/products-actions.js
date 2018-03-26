export const UPDATE_PRODUCT = 'product:updateProduct';
export function updateProduct(newproduct){
	return (
		type: UPDATE_PRODUCT,
		payload: {
			product: newproduct
		}
	)
}