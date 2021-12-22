import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
function AddToCartBtn({ product }) {

    const dispatch = useDispatch()

    return (
        <>
            {
                (<button  className='card__button'
                //     style={{ outline: 'none', border: 'none',
                // backgroundColor:'rgb(208 197 62 / 50%)',color:'black' }}
                    onClick={() => dispatch(addToCart(product))} disabled={product.stock === 0 }>Thêm vào giỏ</button>)
            }
        </>
    )
}

export default AddToCartBtn
