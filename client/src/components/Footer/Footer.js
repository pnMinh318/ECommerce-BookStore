import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitch } from 'react-icons/fa'
import './footer.css'
function Footer() {
    return (
        <div className='footer-wrapper'>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '20px 20px', justifyContent: 'space-around' }}>
            <div className='footer-left'>
              <b>CONTACT US</b>
              <p>-Địa chỉ: Số 1 đường Võ Văn Ngân, thành phố Thủ Đức</p>
              <p>-Email: 18110318@student.hcmute.edu.vn    </p>
              <p>-Hotline: 00000000 </p>
              <p>
                <FaFacebookSquare size='40px'></FaFacebookSquare>
                <FaInstagram size='40px'></FaInstagram>
                <FaTwitch size='40px'></FaTwitch>
              </p>
            </div>
            <div className='footer-center'>
              <b>ABOUT US</b>
              <p>Phạm Nhật Minh-18110318 </p>
              <p>Đặng Văn Sang-18110352</p>
            </div>
            <div className='footer-right'>
              <b>CUSTOMER SERVICES</b>
              <p>Need Help?</p>
              <p>Hướng dẫn mua hàng</p>
            </div>
          </div>
          <div style={{ height: 100, borderTop: 'solid 1px white', margin: '0px 20px' }}>
            <a href='/'>Privacy Policy. Term and conditions</a>
            <p>Copyright &copy; 2021</p>
          </div>
        </div>
    )
}

export default Footer
