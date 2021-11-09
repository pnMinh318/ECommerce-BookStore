//import store from '../store'

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY'


export const addToCart = (product) => (dispatch, getState) => {
    try {
        dispatch({ type: ADD_TO_CART, payload: product })
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.products))// local storage ok
        // localStorage.setItem('cartTotalPrice', JSON.stringify(getState().cart.totalPrice))
        localStorage.setItem('cart', JSON.stringify(getState().cart))
    } catch (error) {

    }

}
export const updateItemQuantity = ({ id, newQuantity }) => (dispatch, getState) => {
    try {
        dispatch({ type: UPDATE_ITEM_QUANTITY, payload: { id, newQuantity } })
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.products))// local storage ok
        // localStorage.setItem('cartTotalPrice', JSON.stringify(getState().cart.totalPrice))
        localStorage.setItem('cart', JSON.stringify(getState().cart))
    } catch (error) {

    }

}
export const removeFromCart = (id) => (dispatch, getState) => {
    try {
        dispatch({ type: REMOVE_FROM_CART, payload: { id } })
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.products)) //local storage ok
        // localStorage.setItem('cartTotalPrice', JSON.stringify(getState().cart.totalPrice))
        // console.log(JSON.parse(localStorage.getItem('cartItems')))
        localStorage.setItem('cart', JSON.stringify(getState().cart))
    } catch (error) {

    }

}