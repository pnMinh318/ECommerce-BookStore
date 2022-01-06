import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
//import shopLogo from './fahasa-logo.png'
import { FcHome } from 'react-icons/fc'


import Cart from './Cart'
import User from './User'



function Header() {

    
    return (
        <>

            <div className='header__img'></div>
            <div className="header">
                <div className='header__nav ' style={{marginLeft:'3rem'}}>
                    <Link
                        to='/'
                        className='text-decoration-none'
                    ><FcHome className='pb-1'></FcHome>Trang chủ </Link>
                </div>
                <div className="header-right">
                    <Cart></Cart>
                    <User ></User>
                </div>
            </div>
        </>
    )
}

export default Header
