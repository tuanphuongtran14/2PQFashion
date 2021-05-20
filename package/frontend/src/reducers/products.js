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
        default:
            return [...state];
}}


export default products;
