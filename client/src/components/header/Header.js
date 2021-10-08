import React from 'react'
import './header.css'
import shopLogo from './fahasa-logo.png'

import { IconContext } from 'react-icons/lib'
import Cart from '../../redux/bindings/Cart'
//import Cart from'./Cart'
import Noti from './Noti'
import User from './User'
// import Banner from './Banner'
// import Number from './Number'
function Header() {
    return (
        <>
            <div className='header'>
                <a href='/'>
                    <img src={shopLogo} alt='Logo' className='header-logo' />
                </a>
                <IconContext.Provider value={{ className: 'header-icons', size: '25px' }}>

                    <div className='header-searchform'>
                        <form action='' method='get'>
                            <input placeholder='Tìm kiếm...' id='header-searchbar'  />
                            <button type="submit" >Search</button>
                        </form>

                    </div>

                    <div style={{ display: 'flex' }}>
                        <div className='header-boxes'>
                            <Cart></Cart>
                            {/* <Number></Number> */}
                        </div>
                        {/* <div className='header-boxes'>
                            <Noti></Noti>
                        </div> */}
                        <div className='header-boxes'>
                            <User></User>
                            {/* <Number></Number> */}
                        </div>
                    </div>

                </IconContext.Provider>
            </div>
            <div style={{backgroundColor:'#FEF9F3'}}>
            {/* <Banner></Banner> */}

            </div>
        </>
    )
}

export default Header
