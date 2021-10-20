import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className='app-main-navbar'>
            <div className='navbar' style={{ display: 'block' }}>
                <p style={{ textAlign: 'center', margin: 0, padding: '10px 0px', backgroundColor: 'orange' }}> <b>DANH SÁCH THỂ LOẠI</b> </p>
                <ul style={{ height: 'auto' }}  >
                    <li>
                        <Link to='/products'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></Link>
                    </li>
                    <li  >
                        <Link to='/products'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></Link>
                    </li>
                    <li  >
                        <Link to='/products'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></Link>
                    </li>
                    <li  >
                        <Link to='/products'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></Link>
                    </li>
                    <li  >
                        <Link to='/'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
