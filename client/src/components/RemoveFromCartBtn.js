import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions'
function RemoveFromCartBtn({ product }) {

    const dispatch = useDispatch()
    
    return (
        <>
            <button onClick={() => dispatch(removeFromCart(product))}>Remove From Cart</button>
        </>
    )
}

export default RemoveFromCartBtn