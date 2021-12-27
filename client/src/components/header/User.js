import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { logout } from '../../redux/actions/userActions'
function User() {

    const { user } = useSelector(state => state.userLogin)
    const userName = user?.name.split(' ')
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
                        <button className='link'>
                            <FaUserAlt size={'1.3rem'}></FaUserAlt>
                            <br></br>
                            {userName[userName.length - 1]}
                        </button>
                        <div className='dropdown__menu'>
                            <div className=' dropdown__content'
                                onClick={() => { history.push('/profile') }}>
                                Thông tin cá nhân
                            </div>
                            {user?.isAdmin &&
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
                </div>
                :
                <>
                    <div className="header__nav">
                        <button className='link' onClick={() => history.push('/login')}>
                            <FaUserAlt size={'1.3rem'}></FaUserAlt>
                            <br></br>
                            Đăng nhập
                        </button>
                    </div>
                </>
                // <Link to='/login' className="header__nav text-decoration-none" >
                //     Đăng nhập
                // </Link>
            }
        </>
    )
}

export default User
