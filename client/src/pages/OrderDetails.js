import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'
import { orderDetails, deliverOrder, payOrder } from '../redux/actions/oderActions'
import { PayPalButton } from 'react-paypal-button-v2'

import Spinners from '../components/Spinners'
import Message from '../components/Message'
function OrderDetails({ match }) {
    const dispatch = useDispatch()
    const [sdkReady, setSdkReady] = useState(false)
    const orderId = match.params.id


    const { user } = useSelector(state => state.userLogin)
    const { order, loading, error } = useSelector(state => state.orderDetails)
    const { loading: loadingDeliver, success: successDeliver, error: errorDeliver } = useSelector(state => state.orderDeliver)
    const { loading: loadingPay, success: successPay, error: errorPay } = useSelector(state => state.orderPay)

    const paypalPrice= ((order?.orderPrice + order?.shippingPrice)/23000).toFixed(2)

    useEffect(() => {
        const addPaypalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal')
            console.log(clientId)
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.async = true
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }
        if (order?._id !== orderId) {
            dispatch(orderDetails(orderId))
        }
        else if (successPay || errorPay || successDeliver || errorDeliver) {
            dispatch({ type: 'ORDER_DELIVER_RESET' })
            dispatch({ type: 'ORDER_PAY_RESET' })
            dispatch(orderDetails(orderId))
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPaypalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, order, orderId, successDeliver, errorDeliver, successPay, errorPay])
    const markAsDeliveredHandler = () => {
        dispatch(deliverOrder(orderId))
    }

    const successPayHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult))
        dispatch({ type: 'ORDER_PAY_RESET' })
    }


    return (
        <>
            {loadingDeliver && <Spinners></Spinners>}
            {errorDeliver && <Message variant='danger' msg='Đã có lỗi xảy ra'></Message>}
            {(loading) ?
                (<Spinners></Spinners>) :
                (error) ? <Message variant='danger' msg='Không tìm thấy đơn'></Message> :
                    <>
                        <h1 className='font1p2 mt-3'> Đơn hàng {`${order._id}`} </h1>
                        <Row>
                            <Col md={8} className='py-3'>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3 className='text-info' >Giao hàng</h3>
                                        <p>
                                            <span className='my-4'>Người nhận: {order.receiverName}</span>
                                            <br></br>
                                            <strong>Địa chỉ giao hàng:</strong>
                                            {'   '} {order.region}, {order.shippingAddress}
                                            <br></br>
                                            <span className='my-4'>Email: {order.email} </span>
                                        </p>
                                        {order.isDelivered ?
                                            <p className='text-right font1p2' style={{ color: 'green' }}>
                                                Đã giao hàng vào {order.deliveredDate.substring(0, 10)}</p> :
                                            <p className='text-right font1p2' style={{ color: 'red' }}>
                                                Chưa giao hàng</p>}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h4 className='text-info'>Phương thức thanh toán</h4>
                                        <p>
                                            <strong className='font1p2'>{order.paymentMethod}</strong>
                                        </p>
                                        {order.isPaid ?
                                            <p className='text-right font1p2' style={{ color: 'green' }}>
                                                Đã thanh toán vào {order.paidDate.substring(0, 10)}</p> :
                                            <p className='text-right font1p2' style={{ color: 'red' }}>
                                                Chưa thanh toán</p>}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h4 className='text-info'>Giỏ hàng:</h4>
                                        {
                                            order.orderItems.length === 0 ?
                                                <Message msg='Không có món hàng nào'> </Message> :
                                                order.orderItems.map((item, index) => {
                                                    return (
                                                        <ListGroup key={index}>
                                                            <Row>
                                                                <Col md={1}>
                                                                    <Image src={item.img} alt={item.name} fluid rounded></Image>
                                                                </Col>
                                                                <Col>
                                                                    <p className='text-warning'>{item.name}</p>
                                                                </Col>
                                                                <Col md={4}>
                                                                    <p className='text-center'>x{item.cartQuantity}</p>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup>
                                                    )
                                                })

                                        }
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={4}>
                                <ListGroup className='p-2' style={{ background: '#f2f2e7' }}>
                                    <ListGroup.Item >
                                        <p> Tổng:
                                            <span className='ml-auto'> {order.orderPrice}đ  </span>
                                        </p>
                                        <p className='my-3'> Phí vận chuyển:
                                            <span className='ml-auto'> {order.shippingPrice}đ  </span>
                                        </p>
                                        <p className='text-right text-danger font1p2 mt-5'>Thành tiền: {order.orderPrice + order.shippingPrice}đ</p>
                                    </ListGroup.Item>
                                </ListGroup>
                                {
                                    !order.isPaid && order.paymentMethod === 'Paypal' &&
                                    (
                                        <ListGroup>
                                            {loadingPay && <Spinners></Spinners>}
                                            {
                                                !sdkReady ? <Spinners></Spinners> : (
                                                    <PayPalButton
                                                        amount={paypalPrice}
                                                        onSuccess={successPayHandler}>
                                                    </PayPalButton>
                                                )
                                            }
                                            {errorPay && <Message variant={'danger'} msg='Thanh toán thất bại'></Message>}
                                        </ListGroup>
                                    )
                                }
                                {
                                    user?.isAdmin && !order.isDelivered &&
                                    (<button className='mt-5 btn btn-block btn-danger' onClick={() => markAsDeliveredHandler()}>
                                        Xác nhận hoàn tất
                                    </button>)
                                }

                                {
                                    successDeliver &&
                                    <p className='Đã xác nhận giao hàng thành công' style={{ color: 'green' }}></p>
                                }
                            </Col>
                        </Row>
                    </>
            }

        </>
    )
}

export default OrderDetails
