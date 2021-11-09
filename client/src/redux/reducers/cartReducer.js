
const cartInitState = {
    products: [],
    totalPrice: 0
}



const cartReducer = (state = cartInitState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // const product = { ...action.payload, cartQuantity: 1 }
            // const existedProductIndex = state.products.findIndex((product) => product._id === action.payload._id)
            // if (existedProductIndex >= 0) {
            //     //trong kho - cartqty >=1 mới đc add
            //     if (state.products[existedProductIndex].stock - state.products[existedProductIndex].cartQuantity >= 1) {
            //         // nếu trong cart chưa có sp thì quantity =1... có rồi thì +1
            //         state.products[existedProductIndex].cartQuantity += 1
            //         //tổng tiền
            //         state.totalPrice += state.products[existedProductIndex].price
            //     }
            // }
            const product = { ...action.payload, cartQuantity: 1 }
            const existedProduct = state.products.find((product) => product._id === action.payload._id)
            if (existedProduct !== undefined) {
                //trong kho - cartqty >=1 mới đc add
                if (existedProduct.cartQuantity < 5  //chỉ cho phép mua tối đa số lượng là 5
                    && (existedProduct.stock - existedProduct.cartQuantity >= 1)) { //  trong kho - cartqty >=1 mới đc add
                    // nếu trong cart chưa có sp thì quantity =1... có rồi thì +1
                    existedProduct.cartQuantity += 1
                    //tổng tiền
                    state.totalPrice += existedProduct.price
                    alert('thêm thành công')
                }
            }
            else {
                state.products = [...state.products, product]
                state.totalPrice += action.payload.price
                alert('thêm thành công')
            }
            //console.log(state)
            return {
                ...state
            }; // cần phải destructure để return object nếu không sẽ object trong object           

        case 'UPDATE_ITEM_QUANTITY':
            let updateItem = state.products.find(item => item._id === action.payload.id)
            // tổng tiền mới = tổng tiền cũ - qt cũ * đơn giá + qty mới * đơn giá
            state.totalPrice = state.totalPrice - updateItem.cartQuantity * updateItem.price + action.payload.newQuantity * updateItem.price
            // phải update tiền trước khi update qty
            updateItem.cartQuantity = action.payload.newQuantity;

            return {
                ...state
            }
        case 'REMOVE_FROM_CART':
            state.products = state.products.filter((product) => product._id !== action.payload.id)
            let newTotalPrice = 0
            state.products.forEach(product => {
                newTotalPrice += product.price * product.cartQuantity
            });
            return {
                ...state,
                totalPrice: newTotalPrice
            };


        default:
            return state;
    }
}

export default cartReducer