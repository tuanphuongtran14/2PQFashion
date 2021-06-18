import * as types from'./../constants/ActionTypes'
var result=sessionStorage.getItem('products');
var data=result?JSON.parse(result):[];
var initialState=data?data:[];
var findProductInCart=(cart,product)=>{
    var index=-1;
    cart.map((cartItem,i)=>{
        if(product.sku===cartItem.sku){
            index=i;
        }
        return cartItem;
    });
    return index;
}
const cart=(state=initialState,action)=>{
    var replaceState;
    var index;
    let {product}=action;
    switch(action.type){
        case types.ADD_TO_CART:
            replaceState=[...state];
            
            index=findProductInCart(replaceState,product);
            if(index===-1){
                replaceState.push(product);
            }else{
                replaceState[index].quantity+=1;
                
            }
            sessionStorage.setItem('products',JSON.stringify(replaceState));
            return replaceState;
        case types.DELETE_PRODUCT_TO_CART:
            replaceState=[...state];
            
            index=findProductInCart(replaceState,product);
            if(index!==-1){
                replaceState.splice(index,1);
            }
            sessionStorage.setItem('products',JSON.stringify(replaceState));
            return replaceState;
        case types.UPDATE_PRODUCT_TO_CART:
            replaceState=[...state];
            
            index=findProductInCart(replaceState,product);
            if(index!==-1){
                replaceState[index]=product;
            }
            sessionStorage.setItem('products',JSON.stringify(replaceState));
            return replaceState;
        case types.ADD_BILL_SUCCESS:  
        if(action.isCheck===true){
            replaceState=[]; 
            sessionStorage.setItem('products',JSON.stringify(replaceState));
        }
        return replaceState; 
        default:
            return state;
    }

}
export default cart;