
//Lấy các action types
import * as types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller'

//xử lý render list sản phẩm
export const fetchProducts=(products)=>{
    return {
        type:types.FETCH_PRODUCTS,
        products,//products=products
    }
}

//Lên API lấy dữ liệu products về
export const fetchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('products','GET',null)
                        .then(res=>{
                            dispatch(fetchProducts(res.data));
                        })
    }
}
