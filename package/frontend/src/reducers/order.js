import * as types from'../constants/ActionTypes'
sessionStorage.setItem('user',JSON.stringify({id_User:"123"}));
var result=sessionStorage.getItem('user');
var user=result?JSON.parse(result):[];
var products=sessionStorage.getItem('products');
result=products?JSON.parse(products):[];


const price={value:0};
async function changeProduct(result,item){
    var product=await{
        sku:item.sku,
        quantity:item.quantity,
    }     
    
    result.push(product);

    }
result=result.map((item)=>{

    return{
        sku:item.sku,
        quantity:item.quantity,
        price:item.price,
    }   
})
result.forEach((item)=>{

    price.value+=item.quantity*item.price; 
})
var initialState={
    products: result,
     totalPrice:price.value
     ,

     id_User: user.id_User,
     coupon:' ',
     nameCustomer:' ',
     address:' ',
     email:' ',
     orderNote:' ',
     paymentMethod:' ',
     phone: ' ',
};

const order=(state=initialState,action)=>{
    var newOrder
    switch(action.type){
        case types.ADD_INFO_USER_TO_ORDER:
            
            newOrder={...state};
            newOrder.nameCustomer=action.infoUser.nameCustomer;
            newOrder.address=action.infoUser.address;
            newOrder.email=action.infoUser.email;
            newOrder.phone=action.infoUser.phone;
            newOrder.paymentMethod=action.infoUser.paymentMethod;
            newOrder.orderNote=action.infoUser.orderNote===''?newOrder.orderNote:action.infoUser.orderNote;
            console.log(newOrder)
        return newOrder;   
        case types.ADD_COUPON_TO_ORDER:
            newOrder={...state};
            newOrder.coupon=action.infoCoupon.coupon===''?newOrder.coupon:action.infoCoupon.coupon;
            newOrder.totalPrice=newOrder.totalPrice-action.infoCoupon.salePrice;
            return newOrder;                
        default:
            return state;
    }

}
export default order;