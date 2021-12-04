import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

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
            {user ?
                <div className="header__nav">

                    <div className="dropdown">
                        <Link to='/' className="text-decoration-none">
                            {user.name}
                        </Link>
                        <div className="dropdown-content">
                            <p onClick={() => logoutHandler()}>Đăng xuất</p>
                            {!user.isAdmin && <Link to='/admin-home'>AdminPage</Link>}
                        </div>
                    </div>
                </div>
                :
                <Link to='/login' className="header__nav text-decoration-none" >
                    Đăng nhập
                </Link>
            }
        </>
    )
}

export default User
