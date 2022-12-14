import * as types from './cart/type';

const initialState = {
	numberCart:0,
	cart:[],
	_products:[]

};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.ADD_PRODUCT_TO_CART:
			state.cart.push(action.payload)
      return {...state}
		case types.GET_ALL_PRODUCT:
			return{
					...state,
					_products:action.payload
			}
		case types.GET_NUMBER_CART:
						return{
								...state
						}
		case types.ADD_CART:
				if(state.numberCart==0){
						let cart = {
								id:action.payload.id,
								quantity:1,
								name:action.payload.name,
								image:action.payload.image,
								price:action.payload.price
						}
						state.Carts.push(cart);
				}
				else{
						let check = false;
						state.Carts.map((item,key)=>{
								if(item.id==action.payload.id){
										state.Carts[key].quantity++;
										check=true;
								}
						});
						if(!check){
								let _cart = {
										id:action.payload.id,
										quantity:1,
										name:action.payload.name,
										image:action.payload.image,
										price:action.payload.price
								}
								state.Carts.push(_cart);
						}
				}
				return{
						...state,
						numberCart:state.numberCart+1
				}
				case types.INCREASE_QUANTITY:
						state.numberCart++
						state.Carts[action.payload].quantity++;
					 
					 return{
							 ...state
					 }
				case types.DECREASE_QUANTITY:
						let quantity = state.Carts[action.payload].quantity;
						if(quantity>1){
								state.numberCart--;
								state.Carts[action.payload].quantity--;
						}
					 
						return{
								...state
						}
				case types.DELETE_CART:
						let quantity_ = state.Carts[action.payload].quantity;
						return{
								...state,
								numberCart:state.numberCart - quantity_,
								Carts:state.Carts.filter(item=>{
										return item.id!=state.Carts[action.payload].id
								})
								
						}

			default:
				return state;
	}
}