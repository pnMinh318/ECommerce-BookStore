import { createStore, combineReducers, applyMiddleware } from 'redux'
import cartReducer from './reducers/cartReducer'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
// const cartTotalPriceFromStorage = localStorage.getItem('cartTotalPrice') ? JSON.parse(localStorage.getItem('cartTotalPrice')) : 0
const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { products: [], totalPrice: 0 } //phải return như này để đủ property của cart trong initstate
const initialState = {
    cart: {
        products: cartFromStorage.products, // thêm local storage ok
        totalPrice: cartFromStorage.totalPrice
    }
}

const middleware = [thunk]

const reducers = combineReducers({
    cart: cartReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer
})
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware))) //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store