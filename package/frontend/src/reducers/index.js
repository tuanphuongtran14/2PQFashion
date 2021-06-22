import {combineReducers} from 'redux'
import products from './products'
import page from './page'
import search from './search'
import sort from './sort'
import cart from './cart'
import order from './order'
import list_bill from './list_bill'
import user from './user'

const appReducer=combineReducers({
    products,
    page,
    search,
    sort,
    cart,
    order,
    list_bill,
    user,
});
export default appReducer;