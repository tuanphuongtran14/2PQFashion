import * as types from './../constants/ActionTypes'

var initialState=[
];
const products=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_PRODUCTS:
            var result=localStorage.getItem('products');
            //Cập nhật giỏ hàng khi thay đổi dữ liệu
            var listItemCart=result?JSON.parse(result):[];
            listItemCart=listItemCart.map(itemCart=>{
                action.products.forEach(itemProduct=>{
                    if(itemCart.sku===itemProduct.sku){
                        itemCart.name=itemProduct.name;
                        itemCart.price=itemProduct.price;
                        var inventory=0;
                        itemProduct.options.forEach(item=>{
                            inventory=item.size===itemCart.size?item.quantity:inventory;
                        })
                        itemCart.inventory=inventory;
                        if(itemCart.inventory===0){
                            itemCart.quantity=0;
                        }
                        itemCart.options=itemProduct.options;
                    }
                })
                return itemCart;
            })
            localStorage.setItem('products',JSON.stringify(listItemCart));
             return Object.assign([],[...state], action.products);
        default:
            return [...state];
}}


export default products;
