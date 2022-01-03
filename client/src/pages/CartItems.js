import React from 'react'
// import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsTrash, BsEye } from 'react-icons/bs'
import { BiCheckShield } from 'react-icons/bi'
import { MdAssignmentReturn } from 'react-icons/md'
import { updateItemQuantity, removeFromCart } from '../redux/actions/cartActions'
import { useHistory } from 'react-router-dom'
function CartItems() {

    const dispatch = useDispatch()
    const history = useHistory()

    const { products, totalPrice } = useSelector(state => state.cart)


    const handleChangeQuantity = (id, e) => {
        const newQuantity = Number(e.target.value)
        console.log(typeof newQuantity)
        dispatch(updateItemQuantity({ id, newQuantity })) //update cart quantity
    }

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleCheckout = () => {
        history.push('/login?redirect=checkout')
    }

    return (
        <>
            {products.length === 0 ?
                (<div style={{ textAlign: 'center', minHeight: '400px', padding: '20% 0px', backgroundColor: '#caddee8c' }}>
                    <h3>không có mặt hàng nào trong giỏ</h3>
                    <Link to='/products'><span >nhấp để tiếp tục mua hàng</span></Link>
                </div>) :
                //Có sản phẩm
                <Row className='my-0' as='div'>
                    <div className='mb-1 w-100' >
                        <p className='text-center text-uppercase'
                            style={{ fontSize: '30px', borderBottom: '0.5px solid  rgba(0, 0, 0, 0.1)' }}
                        >giỏ hàng của bạn</p>
                    </div>
                    <Col xs={8} className='mt-3' style={{ minHeight: '400px' }}>
                        {products.map(product => {
                            return (

                                <div className='py-2 pl-1 mb-1' key={product._id}
                                    style={{ width: '100%', display: 'flex', height: '160px' }}>
                                    <div style={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
                                        <button onClick={() => handleRemoveFromCart(product._id)}
                                            className='my-5 remove_button'
                                        >
                                            <BsTrash></BsTrash>
                                        </button>
                                    </div>
                                    {console.log(product)}

                                    <div style={{ width: '20%' }}>
                                        <img className='cartItem__img'
                                            src={product.img} alt='wtf'></img>
                                    </div>
                                    <div className='pl-3' style={{ width: '45%' }}>
                                        <Link to={`/products/${product._id}`}>
                                            <div className=' text-danger' style={{ minHeight: '30px' }}> {product.name.toUpperCase()}</div>
                                        </Link>
                                        <p className='mt-4'>Đơn giá: {product.price}</p>
                                    </div>
                                    <div style={{ width: '25%', textAlign: 'center' }}>
                                        <div className=' mb-2'>
                                            <select name='quantity' value={product.cartQuantity} className='w-50 h-75 mt-3 '
                                                onChange={(e) => handleChangeQuantity(product._id, e)}>
                                                {
                                                    product.stock <= 5 ?
                                                        [...Array(product.stock).keys()].map(index => {
                                                            return (
                                                                <option value={index + 1} key={index + 1}>{index + 1}</option> // lấy key thì ta đc array [0,1,...stock-1]
                                                            )
                                                        })
                                                        : [1, 2, 3, 4, 5].map(index => {
                                                            return (
                                                                <option value={index} key={index}>{index}</option>
                                                            )
                                                        })
                                                }
                                            </select>
                                        </div>
                                        <span style={{ color: 'red' }}>Thành tiền: {Number(product.price) * Number(product.cartQuantity)}đ</span>
                                    </div>

                                </div>
                            )
                        })}
                    </Col>
                    <Col xs={4} as='div' className='ml-auto' style={{ borderLeft: '0.5px solid rgba(0, 0, 0, 0.1)' }}>
                        <div>
                            <div className=''>
                                <div className='mt-3'>
                                    <p>
                                        <BiCheckShield size={30} color='green' className='mr-3'></BiCheckShield>
                                        Hoàn tiền 111% nếu hàng giả
                                    </p>
                                    <p><BsEye size={30} color='green' className='mr-3'></BsEye>
                                        Mở hộp kiểm tra nhận hàng
                                    </p>
                                    <p><MdAssignmentReturn size={30} color='green' className='mr-3'></MdAssignmentReturn>
                                        Đổi trả trong 30 ngày nếu sp lỗi
                                    </p>
                                </div>
                                <div className='mt-4' style={{ borderTop: '2px solid #6e52e0', fontSize: '1.2rem' }} >
                                    <div className='pt-4 text-uppercase'>
                                        <div className='mr-3'>Tổng số sản phẩm:
                                            <span className='float-right'>
                                                {
                                                    products.reduce((acc, product) => acc + Number(product.cartQuantity), 0)
                                                }
                                            </span>
                                        </div>
                                        <div className='mr-3'>Tổng tiền:
                                            <span className='float-right'>{totalPrice} đ</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-3' >
                                    <button className='w-100 p-2 mb-4 checkout_button'
                                        onClick={() => handleCheckout()}
                                    >TIẾN HÀNH THANH TOÁN</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            }





        </>
    )
}

export default CartItems


