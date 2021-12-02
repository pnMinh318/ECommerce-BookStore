
import './index.css';
import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './bootstrap.min.css'



import store from './redux/store';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm';

import Home from './pages/Home';
import CheckOut from './pages/CheckOut'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CartItems from './pages/CartItems';
// import { useState, setState } from 'react'
//import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Provider store={store}>

      <Router>
        <Switch>
          <Route component={LoginForm} path='/login' exact ></Route>

          <div id='App' style={{ letterSpacing: '0px' }}>
            <Header></Header>
            <Route component={Home} path='/' exact></Route> {/* trang home không sài bootstrap nên ko bọc container được*/}
            <Container >
              <Route component={Products} path='/products' exact></Route>
              <Route component={ProductDetails} path='/products/:id' ></Route>
              <Route component={CartItems} path='/cart' ></Route>
              <Route component={CheckOut} path='/checkout' ></Route>
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
