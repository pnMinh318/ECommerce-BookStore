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
            {errorDeliver && <Message variant='danger' msg='???? c?? l???i x???y ra'></Message>}
            {(loading) ?
                (<Spinners></Spinners>) :
                (error) ? <Message variant='danger' msg='Kh??ng t??m th???y ????n'></Message> :
                    <>
                        <h1 className='font1p2 mt-3'> ????n h??ng {`${order._id}`} </h1>
                        <Row>
                            <Col md={8} className='py-3'>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3 className='text-info' >Giao h??ng</h3>
                                        <p>
                                            <span className='my-4'>Ng?????i nh???n: {order.receiverName}</span>
                                            <br></br>
                                            <strong>?????a ch??? giao h??ng:</strong>
                                            {'   '} {order.region}, {order.shippingAddress}
                                            <br></br>
                                            <span className='my-4'>Email: {order.email} </span>
                                        </p>
                                        {order.isDelivered ?
                                            <p className='text-right font1p2' style={{ color: 'green' }}>
                                                ???? giao h??ng v??o {order.deliveredDate.substring(0, 10)}</p> :
                                            <p className='text-right font1p2' style={{ color: 'red' }}>
                                                Ch??a giao h??ng</p>}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h4 className='text-info'>Ph????ng th???c thanh to??n</h4>
                                        <p>
                                            <strong className='font1p2'>{order.paymentMethod}</strong>
                                        </p>
                                        {order.isPaid ?
                                            <p className='text-right font1p2' style={{ color: 'green' }}>
                                                ???? thanh to??n v??o {order.paidDate.substring(0, 10)}</p> :
                                            <p className='text-right font1p2' style={{ color: 'red' }}>
                                                Ch??a thanh to??n</p>}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h4 className='text-info'>Gi??? h??ng:</h4>
                                        {
                                            order.orderItems.length === 0 ?
                                                <Message msg='Kh??ng c?? m??n h??ng n??o'> </Message> :
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
                                        <p> T???ng:
                                            <span className='ml-auto'> {order.orderPrice}??  </span>
                                        </p>
                                        <p className='my-3'> Ph?? v???n chuy???n:
                                            <span className='ml-auto'> {order.shippingPrice}??  </span>
                                        </p>
                                        <p className='text-right text-danger font1p2 mt-5'>Th??nh ti???n: {order.orderPrice + order.shippingPrice}??</p>
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
                                            {errorPay && <Message variant={'danger'} msg='Thanh to??n th???t b???i'></Message>}
                                        </ListGroup>
                                    )
                                }
                                {
                                    user?.isAdmin && !order.isDelivered &&
                                    (<button className='mt-5 btn btn-block btn-danger' onClick={() => markAsDeliveredHandler()}>
                                        X??c nh???n ho??n t???t
                                    </button>)
                                }

                                {
                                    successDeliver &&
                                    <p className='???? x??c nh???n giao h??ng th??nh c??ng' style={{ color: 'green' }}></p>
                                }
                            </Col>
                        </Row>
                    </>
            }

        </>
    )
}

export default OrderDetails
