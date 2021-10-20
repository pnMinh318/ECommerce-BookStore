
const cartInitState = {

    products: [],
    totalPrice: 0
}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// export const addToCart = (item) => {
//     return {
//         type: ADD_TO_CART,
//         payload: item
//     }
// }
// export const removeFromCart = (item) => {
//     return {
//         type: REMOVE_FROM_CART,
//         payload: item
//     }
// }

const cartReducer = (state = cartInitState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            // state.products.map(product => {
            //     console.log(product)
            //     if (product._id === action.payload._id) {
            //         let cartQuantity={cartQuantity : 1}
            //         product = { ...product, cartQuantity }
            //     }
            //     else {
            //         state.products = [...state.products, action.payload]
            //     }
            // });

            // nếu trong cart chưa có sp thì quantity =1... có rồi thì +1
            return {
                ...state,
                products: [...state.products, action.payload],//, action.payload],
                totalPrice: state.totalPrice + action.payload.price
            };
        case 'REMOVE_FROM_CART':
            let rest
            [action.payload, ...rest] = state.products
            console.log(rest)
            return {
                ...state,
                products: rest, // giá tiền ok rồi còn remove object ra chưa xong
                totalPrice: state.totalPrice - action.payload.price
            };


        default:
            return state;
    }
}

export default cartReducer