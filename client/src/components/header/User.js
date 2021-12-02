import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FiUser } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

import { logout } from '../../redux/actions/userActions'
function User() {

    const { user } = useSelector(state => state.userLogin)
    const history = useHistory()
    const dispatch = useDispatch()
    const logoutHandler = async () => {
        console.log('logout')
        dispatch(logout())
        history.push('/')
    }
    return (
        <>
            <FiUser></FiUser>

            {user ?
                (
                    <>
                        <h4 > {user.name} </h4>
                        <NavDropdown id='user-name'>

                            <NavDropdown.Item>Profile
                                <Link to='/profile' style={{ textDecoration: 'none' }}>
                                </Link>

                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => logoutHandler()}>LOGOUT</NavDropdown.Item>
                        </NavDropdown>
                    </>
                )
                :
                <Link to='/login' >
                    <h4 > Login </h4>
                </Link>
            }


        </>

    )
}

export default User
