
import * as types from'./../constants/ActionTypes'
import {changeCartInDTB}  from'./../actions'
var user=localStorage.getItem('user');

 user=user?JSON.parse(user):{
    id_User: '',
     username:'',
     phone:'',
     address:'',
     email:'',
};

var initialState={
    id_User:user.id_User,
    products:[]
}
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
            replaceState={...state};
            index=findProductInCart(replaceState.products,product);
            if(index===-1){
                replaceState.products.push(product);
            }else{
                if(product.inventory!==0){
                replaceState.products[index].quantity+=1;
            }
                
            }
            changeCartInDTB(replaceState);
            return replaceState;
        case types.DELETE_PRODUCT_TO_CART:
            replaceState={...state};
            
            index=findProductInCart(replaceState.products,product);
            if(index!==-1){
                replaceState.products.splice(index,1);
            }
            changeCartInDTB(replaceState);
            return replaceState;
        case types.UPDATE_PRODUCT_TO_CART:
            replaceState={...state};
            index=findProductInCart(replaceState.products,product);
            if(index!==-1){
                var inventory=0;

                //option chứ size và quantity của sản pham
                product.options.forEach(item=>{
                    inventory=item.size===product.size?item.quantity:inventory 
                })
                product.quantity=inventory===0?0:product.quantity;
                product.inventory=inventory;
                replaceState.products[index]=product;
            }
            
            changeCartInDTB(replaceState);
            return replaceState;
        case types.ADD_BILL_SUCCESS:  
            if(action.isCheck===true){
                replaceState.products=[]; 
                changeCartInDTB(replaceState);
            }
            return replaceState; 
        case types.LOGOUT_CART:
            replaceState.in_User='';
            replaceState.products=[];
            return replaceState; 
        case types.FETCH_CART_BY_ID_USER:  
            replaceState={...state};
            replaceState.products=action.cart.products; 
            
        return replaceState;  
        default:
            
            return state;
    }

}
export default cart;