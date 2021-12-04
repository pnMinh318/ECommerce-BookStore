import React from 'react'
//import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Cart() { //items (array), price : number

    const { products } = useSelector(state => state.cart)
    return (
        <>
            <Link to='/cart' style={{ textDecoration: 'none' }} className="header__nav">
                Giỏ hàng
                {`(${products.length})`}
            </Link>
            
        </>
    )
}

export default Cart
