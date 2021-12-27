import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordersByCurrentUser } from '../redux/actions/oderActions'
import { Row, Col, Form, Table } from 'react-bootstrap'
import { BsCheck } from 'react-icons/bs'
import { TiTimes } from 'react-icons/ti'
import Spinners from '../components/Spinners'
import Message from '../components/Message'
import { updateUserProfile, getUserProfile } from '../redux/actions/userActions'
function UserProfile({ history }) {


    const { user } = useSelector(state => state.userLogin)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [address, setAddress] = useState('')
    const { user: userDetails, loading: loadingDetails } = useSelector(state => state.userProfile)
    const { orders: MyOrders, loading: loadingMyOrders } = useSelector(state => state.orderMyLists)
    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = useSelector(state => state.userUpdateProfile)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!user) {
            history.push('/login')
        } else {
            dispatch(getUserProfile())
            dispatch(ordersByCurrentUser())
        }

    }, [dispatch, user, history])

    useEffect(() => {
        if (userDetails) {
            setName(userDetails.name)
            setEmail(userDetails.email)
            setPhone(userDetails.phone)
            setAddress(userDetails.address)
        }
    }, [userDetails])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name, email, phone, password)
        if (password !== confirmPassword) {
            alert('Mật khẩu không trùng khớp')
        } else {
            if (password !== '') {
                dispatch(updateUserProfile({ name: name, password: password, email: email, phone: phone, address: address }))
            } else {
                dispatch(updateUserProfile({ name: name, email: email, phone: phone, address: address }))
            }
        }
    }
    return (
        <>

            <Row>
                
                <Col xs={4}>
                <p className='font1p2 text-center mt-5 text-uppercase text-info' > Thông tin cá nhân</p>

                    {
                        (loadingDetails || loadingUpdate) ? <Spinners></Spinners> :
                            <Form onSubmit={(e) => submitHandler(e)} >
                                <Form.Group controlId='name' >
                                    <label>Họ tên</label>
                                    <input className='userInfo__input'
                                        value={name || ''}
                                        onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </Form.Group>

                                <Form.Group controlId='email'>
                                    <label>Email</label>
                                    <input className='userInfo__input'
                                        value={email || ''}
                                        placeholder='Nhập Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </Form.Group>

                                <Form.Group controlId='password'>
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">*</span>
                                        </div>
                                        <input type="password"
                                            className="form-control"
                                            placeholder='Mật khẩu mới'
                                            onChange={(e) => setPassword(e.target.value)}>
                                        </input>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">*</span>
                                        </div>
                                        <input type="password" className="form-control"
                                            placeholder='Xác nhận mật khẩu'
                                            onChange={(e) => setConfirmPassword(e.target.value)}>
                                        </input>
                                    </div>
                                </Form.Group>
                                <Form.Group controlId='phone'>
                                    <label>Số điện thoại</label>
                                    <input className='userInfo__input'
                                        value={phone || ''}
                                        onChange={(e) => setPhone(e.target.value)}
                                    >
                                    </input>
                                </Form.Group>
                                <Form.Group controlId='address'>
                                    <label>Địa chỉ</label>
                                    <textarea className='form-control textarea'
                                        value={address || ''}
                                        onChange={(e) => setAddress(e.target.value)}
                                    >
                                    </textarea>
                                </Form.Group>
                                <button className='my-5 py-2 px-5 btn btn-info btn-lg btn-block' type='submit '>Cập nhật</button>
                                {
                                    successUpdate ? <Message variant='success' msg='cập nhật thành công'></Message> : 
                                    errorUpdate && <Message variant='danger' msg='cập nhật thất bại'></Message>
                                }
                            </Form>
                    }
                </Col>
                <Col xs={8}>
                <p className='font1p2 text-center my-5 text-uppercase text-info' ></p>

                    {
                        loadingMyOrders ? <Spinners></Spinners> :

                            <Table striped bordered hover responsive className='table-sm mt-5' >
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
        </>
    )
}

export default UserProfile
