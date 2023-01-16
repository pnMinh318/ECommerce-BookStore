//actions
import { createOrder } from '../redux/actions/oderActions'

import React, { useState, useEffect, useMemo } from 'react'
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
    const [formValues,setFormValues] = useState({
        name:"",email:"",phone:"",address:"",region:"",paymentMethod:"COD"
    });
    
    const userLogin = useMemo(()=>({
        ...user
    }),[user]);
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState(user.email ? user.email : '')
    // const [phone, setPhone] = useState('')
    // const [address, setAddress] = useState('')
    // const [region, setRegion] = useState('')
    // const [paymentMethod, setPaymentMethod] = useState('COD')
    const shippingPrice = 25000
    //function
    useEffect(() => {
        if (success) {
            history.push(`/order/${createdOrder._id}`)
            dispatch({ type: 'ORDER_CREATE_RESET' })
        }
    }, [success, history, createdOrder, dispatch])
    useEffect(()=>{
        if(userLogin){
            setFormValues({...formValues,name: userLogin.name,email: userLogin.email,phone: userLogin.phone});
        }
    },[userLogin])
    
    const isEmptyString = (str) => {
        console.log(str)
        return str.trim().length === 0
    }

    const validatePhoneNumber = (phone) => {
        //eslint-disable-next-line
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/im;
        return re.test(phone);
    }

    const onChangeFormValues = (e)=>{
        setFormValues((current)=> ({...current, [e.current.formKey]: e.current.value}))
    }

    const handlePlaceOrder = () => {
        const emptyValues = Object.values(formValues).findIndex( value => value === "") > -1
        if (emptyValues > -1) {
            alert('Xin hãy điền đầy đủ thông tin')
            return;
        }
        if (!validatePhoneNumber(formValues.phone)) {
            alert('SĐT gồm 10 hoặc 11 chữ số')
            return;
        }
        const order = {
            user: user._id,
            orderItems: products,
            orderPrice: totalPrice,
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            paymentMethod: formValues.paymentMethod,
            shippingPrice: shippingPrice,
            shippingAddress: formValues.address,
            region: formValues.region
        }
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
                                                formKey = "name"
                                                value={formValues.name}
                                                onChange={onChangeFormValues}
                                                onBlur={(e) => isEmptyString(e.target.value)}>
                                            </input>
                                        </div>
                                        <div className='userInfo'>
                                            <label>Email</label>
                                            <input className='userInfo__input'
                                                formKey = "email"
                                                value={user?.email ? user?.email : formValues.email}
                                                onChange={onChangeFormValues}
                                                disabled={user}>
                                            </input>
                                        </div>
                                        <div className='userInfo'>
                                            <label>Số điện thoại</label>
                                            <input className='userInfo__input'
                                                formKey = "phone"value={formValues.phone}
                                                onChange={onChangeFormValues}
                                                onBlur={(e) => isEmptyString(e.target.value)}>
                                            </input>
                                        </div>
                                        <div className='userInfo pt-3'>
                                            <label className='mt-1'>Tỉnh/Thành phố </label>
                                            <RegionDropdown className='py-2 w-50 float-right' style={{ border: '2px solid black' }}
                                                defaultOptionLabel='Chọn Tỉnh/Thành phố'
                                                formKey = "region"
                                                value={formValues.region}
                                                country='Vietnam'
                                                onChange={onChangeFormValues} />
                                        </div>
                                        <div className='userInfo'>
                                            <label>Địa chỉ giao hàng</label>
                                            <input className='userInfo__input'
                                                formKey = "address"
                                                value={formValues.address}
                                                onChange={onChangeFormValues}
                                                onBlur={(e) => isEmptyString(e.target.value)}>
                                            </input>
                                        </div>
                                        <div className='userInfo' style={{ backgroundColor: '#0000ff1f' }}>
                                            <p className='mb-1 font1p2'>Phương thức thanh toán</p>
                                            <input name='paymentMethod'
                                                type='radio' 
                                                formKey = "paymentMethod"
                                                value='COD'
                                                checked={formValues.paymentMethod === 'COD'}
                                                onChange={onChangeFormValues}>
                                            </input>
                                            <label className='ml-5' htmlFor='paymentMethod'>Thanh toán khi giao hàng</label>
                                            <br></br>
                                            <input name='paymentMethod'
                                                type='radio' formKey = "paymentMethod"
                                                value='Paypal'
                                                checked={formValues.paymentMethod === 'Paypal'}
                                                onChange={onChangeFormValues}
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
                                                        <span className='font1p2' style={{ color: 'red' }}>
                                                            {(product.price * product.cartQuantity).toLocaleString('en-US')}đ
                                                        </span>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                            </Col>

                            <div >
                                <p>{`Tổng đơn hàng:${totalPrice.toLocaleString('en-US')}`}đ</p>
                                <p>Phí vận chuyển: {shippingPrice.toLocaleString('en-US')}đ</p>
                                <p className='font1p2' style={{ color: 'red' }}>
                                    {`Tổng cộng (đã bao gồm VAT):${(totalPrice + shippingPrice).toLocaleString('en-US')}`}đ
                                </p>
                            </div>
                            <div className='ml-auto'>
                                <button
                                    className='createOrder ml-auto mr-3'
                                    onClick={() => handlePlaceOrder()}
                                // disabled={!availableToCreateOrder}
                                >Xác nhận đơn hàng </button>
                            </div>
                        </Row>

                    </>
            }
        </>
    )
}

export default CheckOut
