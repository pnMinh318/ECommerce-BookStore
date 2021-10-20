import { createStore,combineReducers, applyMiddleware } from 'redux'
import cartReducer from './reducers/cartReducer'
import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const initialState ={}

const middleware =[thunk]

const reducers = combineReducers({
    cart: cartReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer
})
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware))) //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store