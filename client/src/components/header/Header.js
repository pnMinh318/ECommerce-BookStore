import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import shopLogo from './fahasa-logo.png'
import { IconContext } from 'react-icons/lib'


import Cart from './Cart'
import User from './User'



function Header() {


    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <img src={shopLogo} alt='Logo' className='header-logo' />
                </Link>
                <IconContext.Provider value={{ className: 'header-icons', size: '25px' }}>
                    <div className='header-searchform'>
                        <form action='' method='get'>
                            <input placeholder='.........' id='header-searchbar'  />
                            <button type="submit" >Search</button>
                        </form>

                    </div>

                    <div style={{ display: 'flex' }}>
                        <div className='header-boxes'>
                            <Cart></Cart>
                        </div>
                        
                        <div className='header-boxes'>
                            <User></User>
                            {/* <span onClick={toggleLoginForm()}>Login</span> */}
                            {/* <Number></Number> */}
                        </div>
                    </div>
                </IconContext.Provider>
            </div>
            
        </>
    )
}

export default Header
