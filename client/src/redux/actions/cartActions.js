
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const ADD_SUCCESS = 'ADD_SUCCESS'
const REMOVE_SUCCESS = 'REMOVE_SUCCESS'


export const addToCart = (product) => (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART, payload: product })

    } catch (error) {

    }

}
export const removeFromCart = (product) => (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART, payload: product })

    } catch (error) {

    }

}