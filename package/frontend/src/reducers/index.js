import {combineReducers} from 'redux'
import products from './products'
import page from './page'
import search from './search'
import sort from './sort'
import cart from './cart'
import order from './order'

const appReducer=combineReducers({
    products,
    page,
    search,
    sort,
    cart,
    order,
});
export default appReducer;