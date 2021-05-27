import {combineReducers} from 'redux'
import products from './products'
import page from './page'
import search from './search'

const appReducer=combineReducers({
    products,
    page,
    search
});
export default appReducer;