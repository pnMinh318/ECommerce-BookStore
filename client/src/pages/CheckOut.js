//actions
import { createOrder } from '../redux/actions/oderActions'

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//components
import { Row, Col } from 'react-bootstrap'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { RegionDropdown } from 'react-country-region-selector'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinners'
//css
import '../assets/checkout.css'
function CheckOut({ history }) {


    const dispatch = useDispatch()
    //global state
    const { products, totalPrice } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.userLogin)
    const { loading, success, order: createdOrder } = useSelector(state => state.orderCreate)
    //form
    const [name, setName] = useState('')
    const [email, setEmail] = useState(user.email ? user.email : '')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [region, setRegion] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('COD')
    const shippingPrice = 25000
    const [availableToCreateOrder, setAvailableToCreateOrder] = useState(true)
    //function
    const validateEmptyString = (str) => {
        console.log(str)
    }
    useEffect(() => {
        if (success) {
            history.push(`/order/${createdOrder._id}`)
            dispatch({type:'ORDER_CREATE_RESET'})
        }
    }, [success, history, createdOrder,dispatch])
    const handlePlaceOrder = () => {
        const order = {
            user: user._id,
            orderItems: products,
            orderPrice: totalPrice,
            name: name,
            email: email,
            phone: phone,
            paymentMethod: paymentMethod,
            shippingPrice: shippingPrice,
            shippingAddress: address,
            region: region
        }
        console.log(order)
        dispatch(createOrder(order))
    }

    return (
        <>
            {
                loading ? <Spinner></Spinner> :
                    <>

                        <Link to='/cart' className='text-decoration-none'>
                            <h6 className='goback mb-3'>
                                <BsArrowReturnLeft style={{ cursor: 'pointer' }}></BsArrowReturnLeft>Quay lại giỏ hàng
                            </h6>
                        </Link>
                        <Row className='pt-3' style={{ minHeight: '600px', borderTop: '15px solid grey' }}>
                            <Col xs={6} md={6} >
                                <h1 style={{ color: 'blue' }}> Thanh Toán </h1>
                                <div className='pt-5 oderInfo' > {/*style={{borderTop:'0.5px solid red'}} */}
                                    <form>
                                        <div className='userInfo'>
                                            <label>Họ tên người nhận </label>
                                            <input className='userInfo__input'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                onBlur={(e) => validateEmptyString(e.target.value)}>
                                            </input>
                                        </div>
                                        <div className='userInfo'>
                                            <label>Email</label>
                                            <input className='userInfo__input'
                                                value={user.email ? user.email : email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                disabled={user}>
                                            </input>
                                        </div>
                                        <div className='userInfo'>
                                            <label>Số điện thoại</label>
                                            <input className='userInfo__input'
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                onBlur={(e) => validateEmptyString(e.target.value)}>
                                            </input>
                                        </div>
                                        <div className='userInfo pt-3'>
                                            <label className='mt-1'>Tỉnh/Thành phố </label>
                                            <RegionDropdown className='py-2 w-50 float-right' style={{ border: '2px solid black' }}
                                                defaultOptionLabel='Chọn Tỉnh/Thành phố'
                                                value={region}
                                                country='Vietnam'
                                                onChange={(val) => { console.log(val); setRegion(val) }} />
                                        </div>
                                        <div className='userInfo'>
                                            <label>Địa chỉ giao hàng</label>
                                            <input className='userInfo__input'
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                onBlur={(e) => validateEmptyString(e.target.value)}>
                                            </input>
                                        </div>
                                        <div className='userInfo' style={{ backgroundColor: '#0000ff1f' }}>
                                            <p className='mb-1 font1p2'>Phương thức thanh toán</p>
                                            <input name='paymentMethod'
                                                type='radio' value='COD'
                                                checked={paymentMethod === 'COD'}
                                                onChange={(e) => setPaymentMethod(e.target.value)}>
                                            </input>
                                            <label className='ml-5' htmlFor='paymentMethod'>Thanh toán khi giao hàng</label>
                                            <br></br>
                                            <input name='paymentMethod'
                                                type='radio' value='Paypal'
                                                checked={paymentMethod === 'Paypal'}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                            ></input>
                                            <label className='ml-5' htmlFor='paymentMethod'>Paypal</label>
                                        </div>
                                    </form>
                                </div>

                            </Col>
                            <Col xs={6} md={6}  >
                                <div style={{ minHeight: '350px' }}>
                                    {
                                        products.map((product) => {
                                            return (
                                                <div className='cartItem__group pt-2' key={product._id}>
                                                    <div style={{ width: '20%' }}>
                                                        <img className='cartItem__img ' style={{ maxHeight: '120px' }}
                                                            src={product.img} alt='wtf'></img>
                                                    </div>
                                                    <div className='pl-3' >
                                                        <Link to='/cart' className='text-decoration-none'>
                                                            <div style={{ fontSize: '1rem', height: '50px' }}> {product.name}</div>
                                                        </Link>
                                                        <span>{product.price} * {product.cartQuantity}</span>
                                                        <br></br>
                                                        <span className='font1p2' style={{ color: 'red' }}>{product.price * product.cartQuantity}đ</span>

                                                    </div>
                                                    <div style={{ textAlign: 'center' }}>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                            </Col>

                            <div >
                                <p>{`Tổng đơn hàng:${totalPrice}`}đ</p>
                                <p>Phí vận chuyển: {shippingPrice}đ</p>
                                <p className='font1p2' style={{ color: 'red' }}> {`Tổng cộng (đã bao gồm VAT):${totalPrice + shippingPrice}`}đ</p>
                            </div>
                            <div className='ml-auto'>
                                <button
                                    className='createOrder ml-auto mr-3'
                                    onClick={() => handlePlaceOrder()}
                                    disabled={!availableToCreateOrder}
                                >Xác nhận đơn hàng </button>
                                {success && <p className='text-center' style={{ color: 'red' }} >Đặt hàng thành công</p>}
                            </div>
                        </Row>

                    </>
            }
        </>
    )
}

export default CheckOut
