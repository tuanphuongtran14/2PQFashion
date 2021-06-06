import {combineReducers} from 'redux'
import products from './products'
import page from './page'
import search from './search'
import sort from './sort'

const appReducer=combineReducers({
    products,
    page,
    search,
    sort,
});
export default appReducer;