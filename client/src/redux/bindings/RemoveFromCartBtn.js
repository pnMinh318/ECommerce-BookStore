import { connect } from "react-redux";
import Cart from "../../components/header/Cart";
import RemoveFromCartBtn from "../../components/RemoveFromCartBtn";
import { removeFromCart } from "../reducers/cartReducer";


const mapStateToProps = (state)=>{
    return ({
        items: state.cart.items,
        totalPrice: state.cart.totalPrice
    })
}

const mapActionsToProps ={
    REMOVE_FROM_CART: removeFromCart
}

connect(mapStateToProps)(Cart)
export default connect(null,mapActionsToProps)(RemoveFromCartBtn)