import { connect } from "react-redux";
import Cart from "../../components/header/Cart";


const mapStateToProps = (state)=> {
    return {
        items: state.cart.items,
        totalPrice: state.cart.totalPrice
    }
}

export default connect(mapStateToProps,null)(Cart)

