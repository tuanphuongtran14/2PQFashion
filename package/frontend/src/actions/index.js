
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

//xử lý trang index đang gọi product
export const getDataPage=(data)=>{
    return {
        type:types.PAGE_INDEX,
        data,//products=products
    }
}

//xử lý tìm kiếm
export const onSearch=(keyword)=>{
    return {
        type:types.SEARCH,
        keyword,//products=products
    }
}

//xử lý sort theo giá
export const onSort=(status)=>{
    return {
        type:types.SORT,
        status,//products=products
    }
}
