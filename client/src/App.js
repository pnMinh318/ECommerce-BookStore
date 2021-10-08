
import './index.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import Header from './components/header/Header';
import Home from './components/Home';
import ItemCard from './components/ItemCard';
import ItemCards from './components/ItemCards';
import { FaFacebookSquare, FaInstagram, FaTwitch } from 'react-icons/fa'
// import { useState, setState } from 'react'
//import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Provider store={store}>
      <div id='App'>
        <Header></Header>
        <div className='app-home-container'>
          <Home></Home>

          <div className='category-noibat' style={{ backgroundColor: '#FAFAFA', height: 350, marginTop: 10 }}>
            <p style={{ textAlign: 'center', fontWeight: 600, margin: 0, backgroundColor: '#94baf3', borderRadius: 3, paddingTop: 10, paddingBottom: 10 }}>SAN PHAM NOI BAT</p>
            <div className='container' style={{ display: 'flex', justifyContent: 'space-evenly', boxSizing: 'border-box' }}>
              <ItemCards></ItemCards>
            </div>
          </div>
        </div>
        <div className='footer-wrapper' style={{ backgroundColor: '#2d69c4', height: 300, display: 'block', color: 'white' }}>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '20px 20px', justifyContent: 'space-around' }}>
            <div className='footer-left'>
              <b>CONTACT US</b>
              <p>-Địa chỉ: Số 1 đường Võ Văn Ngân, thành phố Thủ Đức</p>
              <p>-Email:    </p>
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
            <a>Privacy Policy. Term and conditions</a>
            <p>Copyright &copy; 2021</p>
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;
