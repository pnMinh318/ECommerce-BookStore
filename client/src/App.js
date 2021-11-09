
import './index.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './bootstrap.min.css'



import store from './redux/store';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer'
import Home from './pages/Home';

import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import LoginForm from './components/LoginForm';
import CartItems from './pages/CartItems';
import React from 'react';
// import { useState, setState } from 'react'
//import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Provider store={store}>

      <Router>
        <Switch > {/* dùng Switch để khi Route trúng 1 đường thì sẽ không route tiếp các component khác */}
          {/* <React.Fragment>
          </React.Fragment> */}
          <Route computedmatch component={LoginForm} path='/login' ></Route>

          <div computedmatch='true' id='App' style={{ letterSpacing: '0px' }}>
            <Header></Header>
            <Route component={Home} path='/' exact></Route> {/* trang home không sài bootstrap nên ko bọc container được*/}
            <Container >
              <Route component={Products} path='/products' exact></Route>
              <Route component={ProductDetails} path='/products/:id' ></Route>
              <Route component={CartItems} path='/cart' ></Route>
            </Container>
            <Route></Route> {/*rout không trúng gì thì ở lại trang hiện tại */}
            <Footer></Footer>
          </div>
        </Switch>

      </Router>

    </Provider >

  );
}

export default App;
