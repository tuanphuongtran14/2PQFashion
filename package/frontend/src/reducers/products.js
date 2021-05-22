import * as types from './../constants/ActionTypes'

var initialState=[
];
var findIndex=(products,id)=>{
    var result=-1;
    products.forEach((product,index)=>{
        if(product.id===id){
            result=index;
        }
    })
    return result;
}
const products=(state=initialState,action)=>{
    var index;
    var replaceState;
    switch(action.type){
        case types.FETCH_PRODUCTS:
             return Object.assign([],[...state], action.products);
        default:
            return [...state];
}}


export default products;
