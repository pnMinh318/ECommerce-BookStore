import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { ordersByCurrentUser } from '../redux/actions/oderActions'
import { Form, Button, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { getUserDetailsByID, updateUser } from '../../redux/actions/userActions'
import Spinners from '../../components/Spinners'
import Message from '../../components/Message'
function UserEditAdmin({ match }) {

    const userId = match.params.id
    const dispatch = useDispatch()
    const history = useHistory()


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [isAdmin, setIsadmin] = useState(false)
    const { user, loading, error } = useSelector(state => state.userDetails)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = useSelector(state => state.userUpdate)
    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: 'USER_UPDATE_RESET' })
            history.push('/admin/users-list')
        } else {
            if (!user?.name || user?._id !== userId) {
                dispatch(getUserDetailsByID(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsadmin(user.isAdmin)
            }
        }
    }, [user, successUpdate, errorUpdate, userId, history, dispatch])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin }))
    }
    return (
        <>
            <Link to='/admin/users-list' className='btn btn-light my-3 font1p2'>Quay lại</Link>
            <h5> Chỉnh sửa người dùng</h5>
            {loadingUpdate && <Spinners></Spinners>}
            {errorUpdate && <Message variant='danger' msg={errorUpdate}></Message>}
            {
                loading ? <Spinners></Spinners> : error ? <Message variant='danger' msg={error}></Message> :
                    <>

                        <Container style={{ padding: '0 300px' }}>
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

                                <Form.Group controlId='isadmin'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Admin'
                                        checked={isAdmin}
                                        onChange={(e) => setIsadmin(e.target.checked)}>
                                    </Form.Check>
                                </Form.Group>
                                <Button type='submit' variant='primary'> Cập nhật</Button>
                            </Form>
                        </Container>
                    </>
            }
        </>
    )
}

export default UserEditAdmin
