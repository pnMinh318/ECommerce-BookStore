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
                    <div className='dropdown__wrapper'>
                        <button className='link'>{user.name}</button>
                        <div className='dropdown__menu'>
                            <div className=' dropdown__content'
                                onClick={() => { history.push('/profile') }}>
                                Thông tin cá nhân
                            </div>
                            {user.isAdmin &&
                                <div className=' dropdown__content'
                                    onClick={() => { history.push('/admin') }}>
                                    Admin
                                    
                                </div>
                            }
                            <div className='dropdown__content'
                                onClick={() => logoutHandler()}>
                                Đăng xuất
                            </div>

                        </div>



                    </div>

                    {/* <div className="user-dropdown">
                        <Link to='/' className="text-decoration-none">
                            {user.name}
                        </Link>
                        <div className="user-dropdown-menu">
                            <p className='link'
                                onClick={() => logoutHandler()}>
                                Đăng xuất</p>
                            {!user.isAdmin &&
                                <Link className='link'
                                    to='/admin-home'>AdminPage</Link>}
                        </div>
                    </div> */}
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
