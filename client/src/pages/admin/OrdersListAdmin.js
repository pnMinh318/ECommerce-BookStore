import React, { useEffect } from 'react'
import {FcCheckmark} from 'react-icons/fc'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listOrders } from '../../redux/actions/oderActions'
import Spinners from '../../components/Spinners'
import Message from '../../components/Message'

function OrdersListAdmin({history}) {


    const ordersList = useSelector(state => state.orderList)
    const { loading, orders, error } = ordersList

    //const { loading: loadingDelete, success: successDelete, error: errorDelete } = useSelector(state => state.productDelete)


    const userLogin = useSelector(state => state.userLogin)
    const { user } = userLogin

    const dispatch = useDispatch()

    useEffect(() => {
        if (!user?.isAdmin) {
            history.push('/login')
        }else{
            dispatch(listOrders())
        }
    }, [dispatch, history, user])


    return (
        <>
            <Row>
                <Col>
                    <h1>Orders</h1>
                </Col>
                
            </Row>
            
            {/* {loadingDelete && <Spinners></Spinners>}
            {errorDelete && <Message variant='danger' msg='Xóa thất bại'></Message>} */}
            <div style={{ minHeight: '500px' }}>
                {
                    loading ? <Spinners></Spinners> :
                        error ? <Message variant='danger' msg='Có lỗi đã xảy ra'></Message> :
                            (
                                <Table striped bordered hover responsive className='table-sm'>
                                    <thead>
                                        <tr>
                                            <th>Mã đơn</th>
                                            <th>Ngày đặt</th>
                                            <th>Tổng tiền</th>
                                            <th>Thanh toán</th>
                                            <th>Giao hàng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map(order =>
                                            (<tr key={order._id}>
                                                <td>{order._id}</td>
                                                <td>{order.createdAt.substring(0,10)}</td>
                                                <td>{order.orderPrice + order.shippingPrice}đ</td>
                                                <td>
                                                    {order.isPaid ? <FcCheckmark></FcCheckmark> : <span className='text-danger'>&times;</span>}
                                                </td>
                                                <td style={{width:'40px'}}>
                                                    {order.isDelivered ? <FcCheckmark></FcCheckmark> : <span className='text-danger'>&times;</span>}
                                                </td>
                                                <td style={{width:'40px'}}>
                                                    <Button onClick={() => history.push(`/admin/order/${order._id}`)}>Xem</Button>
                                                    <Button style={{ background: 'red' }} >Hủy</Button>
                                                </td>
                                            </tr>))
                                        }
                                    </tbody>
                                </Table>
                            )
                }
            </div>
        </>

    )
}

export default OrdersListAdmin
