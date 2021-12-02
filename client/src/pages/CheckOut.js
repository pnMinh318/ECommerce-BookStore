//actions
import { createOrder } from '../redux/actions/oderActions'

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//components
import { Row, Col } from 'react-bootstrap'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { RegionDropdown } from 'react-country-region-selector'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinners'
//css
import './checkout.css'
function CheckOut() {


    const shippingPrice = 25000
    const dispatch = useDispatch()
    //global state
    const { products, totalPrice } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.userLogin)
    const { loading, success } = useSelector(state => state.order)
    //form
    const [name, setName] = useState('')
    const [email, setEmail] = useState(user.email ? user.email : '')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [region, setRegion] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('COD')
    const [availableToCreateOrder, setAvailableToCreateOrder] = useState(true)
    //function
    const validateEmptyString = (str) => {
        console.log(str)
    }
    // useEffect(() => {
    //     if (success) {
    //         alert("Đặt hàng thành công")
    //         console.log(order)
    //     } else {
    //         alert('Đặt hàng thất bại')
    //         console.log(error)
    //     }
    // }, [success, error])
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
        if (success) {
            alert('Đặt hàng thành công')
        }
    }

    return (
        <>
            {
                loading ? <Spinner></Spinner> :
                    <>

                        <Link to='/cart' className='text-decoration-none'>
                            <h6 className='mb-3'>
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
                                        <div className='userInfo'>
                                            <label>Địa chỉ giao hàng</label>
                                            <input className='userInfo__input'
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                onBlur={(e) => validateEmptyString(e.target.value)}>
                                            </input>
                                        </div>
                                        <div className='userInfo pt-3'>
                                            <label>Tỉnh/Thành phố </label>
                                            <RegionDropdown className='py-2 w-50 float-right' style={{ border: '2px solid black' }}
                                                defaultOptionLabel='Chọn Tỉnh/Thành phố'
                                                value={region}
                                                country='Vietnam'
                                                onChange={(val) => { console.log(val); setRegion(val) }} />
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
                                                            <div className=' text-danger' style={{ fontSize: '1.2rem', height: '50px' }}> {product.name}</div>
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
                                {/* <div className='paymentmethod mr-5 mb-3' style={{ backgroundColor: '#0000ff1f' }}>
                        <div className='payment__Select text-center' >
                            <label for='payment'>COD</label>
                            <input type='radio'
                                value='COD'
                                name='payment'
                                checked>
                            </input>
                            <label for='payment'>PayPal</label>
                            <input type='radio'
                                value='PayPal'
                                name='payment'>
                            </input>
                        </div>
                    </div> */}
                            </Col>
                            <div>
                                <p>{`Tổng đơn hàng:${totalPrice}`}đ</p>
                                <p>Phí vận chuyển:25,000đ</p>
                                <p className='font1p2'> <b >{`Tổng cộng (đã bao gồm VAT):${totalPrice + shippingPrice}`} </b>đ</p>
                            </div>
                            <div className='ml-auto'>
                                <button
                                    className='createOrder ml-auto mr-3'
                                    onClick={() => handlePlaceOrder()}
                                    disabled={!availableToCreateOrder}
                                >Xác nhận đơn hàng </button>

                            </div>
                        </Row>
                    </>
            }
        </>
    )
}

export default CheckOut
