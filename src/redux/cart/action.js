import * as types from "./type";

export function addProductToCart(payload){
	return {
    type: types.ADD_PRODUCT_TO_CART,
    payload
  }
}
/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload){
	return{
			type:'GET_ALL_PRODUCT',
			payload
	}
}

/*GET NUMBER CART*/
export function GetNumberCart(){
	return{
			type:'GET_NUMBER_CART'
	}
}

export function AddCart(payload){
	return {
			type:'ADD_CART',
			payload
	}
}
export function UpdateCart(payload){
	return {
			type:'UPDATE_CART',
			payload
	}
}
export function DeleteCart(payload){
	return{
			type:'DELETE_CART',
			payload
	}
}

export function IncreaseQuantity(payload){
	return{
			type:'INCREASE_QUANTITY',
			payload
	}
}
export function DecreaseQuantity(payload){
	return{
			type:'DECREASE_QUANTITY',
			payload
	}
}
