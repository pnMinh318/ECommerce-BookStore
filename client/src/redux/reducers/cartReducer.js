
const cartInitState = {

    items: [],
    totalPrice: 0
}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

const cartReducer = (state = cartInitState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
                totalPrice: state.totalPrice + action.payload.price
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: [...state.items, action.payload], // giá tiền ok rồi còn remove object ra chưa xong
                totalPrice: state.totalPrice - action.payload.price
            };


        default:
            return state;
    }
}

export default cartReducer