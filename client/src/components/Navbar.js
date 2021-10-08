import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
function Navbar() {
    return (
        <div className='app-main-navbar'>
            <div className='navbar' style={{ display: 'block' }}>
                <p style={{ textAlign: 'center', margin: 0, padding: '10px 0px', backgroundColor: 'orange' }}> <b>DANH SÁCH THỂ LOẠI</b> </p>
                <ul style={{ height: 'auto' }}  >
                    <li>
                        <a href='/'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></a>
                    </li>
                    <li  >
                        <a href='/'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></a>
                    </li>
                    <li  >
                        <a href='/'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></a>
                    </li>
                    <li  >
                        <a href='/'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></a>
                    </li>
                    <li  >
                        <a href='/'>Kinh dị
                            <span><IoIosArrowForward style={{ float: 'right', marginTop: '2px' }}></IoIosArrowForward></span></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
