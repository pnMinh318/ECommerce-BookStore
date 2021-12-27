import React from 'react'
import { AiFillShopping } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Cart() { //items (array), price : number

    const { products } = useSelector(state => state.cart)
    return (
        <>
            <Link to='/cart' style={{ textDecoration: 'none' }} className="header__nav">
                <AiFillShopping size={'1.5rem'}></AiFillShopping>
                <small className='mt-2'> {`(${products.length})`}</small>
            </Link>
            
        </>
    )
}

export default Cart
