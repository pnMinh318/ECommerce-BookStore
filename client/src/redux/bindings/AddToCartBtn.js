import {connect} from'react-redux'
import Cart from '../../components/header/Cart'
import AddToCartBtn from '../../components/AddToCartBtn'
import { addToCart } from '../reducers/cartReducer'
const mapStateToProps= (state)=> {
    return {
        items : state.cart.items, //key là cái prop muốn truyền vào components,còn value là cái nhánh trong redux store
    }
}
const mapActionsToProps = {
    ADD_TO_CART : addToCart
}
connect(mapStateToProps)(Cart)
//connect()
export default connect(null,mapActionsToProps)(AddToCartBtn) // tham so thu 2 : dispatch qua store,tham so 1: prop muon truyen vao component
// khi component gọi cái function addItem thì sẽ dispatch action addToCart tới store