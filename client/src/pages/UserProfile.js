import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordersByCurrentUser } from '../redux/actions/oderActions'
import { Row, Col, Form, Table } from 'react-bootstrap'
import { BsCheck } from 'react-icons/bs'
import { TiTimes } from 'react-icons/ti'
import Spinners from '../components/Spinners'
function UserProfile({ history }) {


    const { user } = useSelector(state => state.userLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //const { user, loading, error } = useSelector(state => state.userDetails)
    const { orders: MyOrders, loading: loadingMyOrders } = useSelector(state => state.orderMyLists)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ordersByCurrentUser())
        setName(user.name)
        setEmail(user.email)
    }, [dispatch,user])

    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Row>
                <Col xs={4}>
                    <h1> My Profile</h1>
                    <Form onSubmit={(e) => submitHandler(e)}>
                        <Form.Group controlId='name'>
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control
                                type=''
                                placeholder='Nhập Tên'
                                value={name}
                                onChange={(e) => setName(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Nhập Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Nhập mật khẩu'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='confirmpassword'>
                            <Form.Label>Xác nhận Mật khẩu</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Xác nhận mật khẩu'
                                value={confirmPassword}
                                onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={8}>
                    <h1> My Orders</h1>
                    {
                        loadingMyOrders ? <Spinners></Spinners> :

                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>Người nhận</th>
                                        <th>Ngày mua</th>
                                        <th>Tổng tiền</th>
                                        <th>Thanh toán</th>
                                        <th>Giao hàng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        MyOrders.map((order) => {
                                            return (
                                                <tr key={order?._id}>
                                                    <td>{order?.receiverName}</td>
                                                    <td>{order?.createdAt.substring(0, 10)}</td>
                                                    <td>{order.orderPrice + order.shippingPrice}đ</td>
                                                    <td className='text-center'>
                                                        {order?.isPaid ?
                                                            <BsCheck style={{ fontSize: '30px', color: 'green' }}></BsCheck>
                                                            : <TiTimes style={{ fontSize: '25px', color: 'red' }}>&times;</TiTimes>}
                                                    </td>
                                                    <td className='text-center'>
                                                        {order?.isDelivered ?
                                                            <BsCheck style={{ fontSize: '30px', color: 'green' }}></BsCheck>
                                                            : <TiTimes style={{ fontSize: '25px', color: 'red' }}>&times;</TiTimes>}
                                                    </td>
                                                    <td><button
                                                        className='btn btn-dark'
                                                        onClick={() => history.push(`/order/${order._id}`)}>
                                                        Chi tiết
                                                    </button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                    }
                </Col>
            </Row>
            {/* <h1> My Orders</h1>
            {
                loadingMyOrders ? <Spinners></Spinners> :

                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Người nhận</th>
                                <th>Ngày mua</th>
                                <th>Tổng tiền</th>
                                <th>Thanh toán</th>
                                <th>Giao hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MyOrders.map((order) => {
                                    return (
                                        <tr key={order._id}>
                                            <td>{order?.receiverName}</td>
                                            <td>{order?.createdAt.substring(0, 10)}</td>
                                            <td>{order.orderPrice + order.shippingPrice}</td>
                                            <td>{order?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                                            <td>{order?.isDelivered ? 'Đã giao' : 'Chưa giao'}</td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </Table>
            } */}
        </>
    )
}

export default UserProfile
