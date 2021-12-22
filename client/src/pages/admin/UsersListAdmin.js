import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, listUsers } from '../../redux/actions/userActions'
import Spinners from '../../components/Spinners'
import Message from '../../components/Message'
import { useHistory } from 'react-router'


function UsersListAdmin() {


    const usersList = useSelector(state => state.usersList)
    const { loading, users, error } = usersList

    const userLogin = useSelector(state => state.userLogin)
    const { user } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (user && user.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/')
        }
    }, [dispatch, history, successDelete, user])




    const handleDeleteUser = (id) => {
        if (window.confirm('Are you sure delete User?')) {
            dispatch(deleteUser(id))
        }
    }
    return (
        <div style={{ minHeight: '500px' }}>
            <h1>Users</h1>
            {
                loading ? <Spinners></Spinners> :
                    error ? <Message variant='danger' msg={error}></Message> :
                        (
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>name</th>
                                        <th>Email</th>
                                        <th>Is Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user =>
                                        (<tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {user.isAdmin ?
                                                    <i className='fas fa-check' style={{ color: 'green' }}>yes</i> :
                                                    <i className='fas fa-times' style={{ color: 'red' }}>no</i>}
                                            </td>
                                            <td>
                                                <Button onClick={() => history.push(`/admin/user/${user._id}/edit`)}>Chỉnh sửa</Button>
                                                <Button style={{ background: 'red' }} onClick={() => handleDeleteUser(user._id)}>Xoá</Button>
                                            </td>
                                        </tr>))
                                    }
                                </tbody>
                            </Table>
                        )
            }
        </div>
    )
}

export default UsersListAdmin
