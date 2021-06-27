import { type } from 'jquery';
import * as types from'./../constants/ActionTypes'
var result=localStorage.getItem('products');
var data=result?JSON.parse(result):[];
var initialState=data?data:[];
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
                if(product.inventory!==0){
                replaceState[index].quantity+=1;
            }
                
            }
            localStorage.setItem('products',JSON.stringify(replaceState));
            return replaceState;
        case types.DELETE_PRODUCT_TO_CART:
            replaceState=[...state];
            
            index=findProductInCart(replaceState,product);
            if(index!==-1){
                replaceState.splice(index,1);
            }
            localStorage.setItem('products',JSON.stringify(replaceState));
            return replaceState;
        case types.UPDATE_PRODUCT_TO_CART:
            replaceState=[...state];
            index=findProductInCart(replaceState,product);
            if(index!==-1){
                var inventory=0;

                //option chứ size và quantity của sản pham
                product.options.forEach(item=>{
                    inventory=item.size===product.size?item.quantity:inventory 
                })
                product.quantity=inventory===0?0:product.quantity;
                product.inventory=inventory;
                replaceState[index]=product;
            }
            localStorage.setItem('products',JSON.stringify(replaceState));
            return replaceState;
        case types.ADD_BILL_SUCCESS:  
        if(action.isCheck===true){
            replaceState=[]; 
            localStorage.setItem('products',JSON.stringify(replaceState));
        }
        return replaceState; 
        case types.LOGOUT_CART:
            replaceState=[];
            return replaceState; 
        default:
            return state;
    }

}
export default cart;