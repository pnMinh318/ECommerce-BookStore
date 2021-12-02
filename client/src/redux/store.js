import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//reducers
import cartReducer from './reducers/cartReducer'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { userLoginReducer } from './reducers/userReducer'
import { orderCreateReducer } from './reducers/orderReducers'

// const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
// const cartTotalPriceFromStorage = localStorage.getItem('cartTotalPrice') ? JSON.parse(localStorage.getItem('cartTotalPrice')) : 0
const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { products: [], totalPrice: 0 } //phải return như này để đủ property của cart trong initstate
const userFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
const initialState = {
    cart: {
        products: cartFromStorage.products, // thêm local storage ok
        totalPrice: cartFromStorage.totalPrice
    },
    userLogin: { user : userFromStorage }
}

const middleware = [thunk]

const reducers = combineReducers({
    order: orderCreateReducer,
    cart: cartReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer
})
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware))) //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store