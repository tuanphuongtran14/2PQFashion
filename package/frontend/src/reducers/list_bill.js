import * as types from'./../constants/ActionTypes'

var initialState=[];
var findProductInCart=(cart,product)=>{
    var index=-1;
    cart.map((cartItem,i)=>{
        if((product.sku===cartItem.sku) && (product.size===cartItem.size)){
            index=i;
        }
        return cartItem;
    });
    return index;
}
const list_bill=(state=initialState,action)=>{
    var replaceState;
    var index;
    switch(action.type){
        case types.FETCH_BILLS_BY_USER:
            replaceState=[...state];
            replaceState=action.bills;
            return replaceState;
        case types.DELETE_PRODUCT_TO_CART:
           
            return replaceState;
        case types.UPDATE_PRODUCT_TO_CART:
            replaceState=[...state];
        
        return replaceState; 
        default:
            
            return state;
    }

}
export default list_bill;