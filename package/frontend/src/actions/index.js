
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

//Xử lý giỏ hàng
export const onAddToCart=(product)=>{
    return {
        type:types.ADD_TO_CART,
        product,//products=products
    }
}

//xóa sản phẩm khỏi giỏ hàng
export const onDeleteProductToCart=(product)=>{
    return{
        type:types.DELETE_PRODUCT_TO_CART,
        product
    }
}

//cập nhật sản phẩm khỏi giỏ hàng
export const onUpdateProductToCart=(product)=>{
    return{
        type:types.UPDATE_PRODUCT_TO_CART,
        product

    }
}

//add thông tin user vào order
export const addInfoUserToOrder=(infoUser)=>{
    return{
        type:types.ADD_INFO_USER_TO_ORDER,
        infoUser

    }
}

//add thông tin user vào order
export const addCouponToOrder=(infoCoupon)=>{
    return{
        type:types.ADD_COUPON_TO_ORDER,
        infoCoupon

    }
}

//Thêm sản phẩm
export const saveBill=(bill)=>{
    return{
        type:types.SAVE_BILL,
        bill,
    }
}

export const addBillRequest=(newOrder)=>{
        return callApi('bill','POST',{
            products: newOrder.products,
             totalPrice: newOrder.totalPrice
             ,
             nameCustomer:newOrder.nameCustomer,
             id_User: newOrder.id_User,
             coupon: newOrder.coupon,
             address:newOrder.address,
             email:newOrder.email,
             orderNote: newOrder.orderNote,
             paymentMethod: newOrder.paymentMethod,
             phone:newOrder.phone,
        })
}

//add bill success
export const addBillSucess=(isCheck)=>{
    return{
        type:types.ADD_BILL_SUCCESS,
        isCheck
    }
}