import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Cart() { //items (array), price : number

    const { products } = useSelector(state => state.cart)
    return (
        <>
            <Link to='/cart' style={{textDecoration:'none'}}>
                <IoCartOutline></IoCartOutline>
                {`(${products.length})`}
                <h4 style={{ textTransform: 'uppercase' }}>Cart</h4>
                {/* {
                    products.length === 0 ?
                        <h4 style={{ textTransform: 'uppercase' }}>Cart</h4> :
                        <h4 style={{ textTransform: 'uppercase' }}> {`${totalPrice}$`}</h4>
                } */}
            </Link>

        </>
    )
}

export default Cart
