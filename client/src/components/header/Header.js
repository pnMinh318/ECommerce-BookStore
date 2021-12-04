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
                <div className='header__nav '>
                    <Link
                        to='/'
                        className='text-decoration-none'
                    ><FcHome className='pb-1'></FcHome>Home </Link>
                </div>
                {/* <Link to='/'>
                    <img  className='mt-3'
                        src='https://previews.123rf.com/images/jovanas/jovanas1602/jovanas160201759/52212634-book-logo-sign-black.jpg'
                        alt='Logo' className='header-logo' />
                </Link> */}
                <div className="header-right">
                    <Cart></Cart>
                    <User ></User>
                </div>
            </div>

        </>
    )
}

export default Header
