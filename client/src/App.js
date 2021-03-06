
import './index.css';
import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './bootstrap.min.css'



import store from './redux/store';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import LoginRegister from './pages/LoginRegister';

import Home from './pages/Home';
import CheckOut from './pages/CheckOut'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CartItems from './pages/CartItems';
import UserProfile from './pages/UserProfile';
import HomeAdmin from './pages/admin/HomeAdmin'
// import UsersListAdmin from './pages/admin/UsersListAdmin';
// import UserEditAdmin from './pages/admin/UserEditAdmin';
// import ProductsListAdmin from './pages/admin/ProductsListAdmin';
import OrderDetails from './pages/OrderDetails';
function App() {
  return (
    <Provider store={store}>

      <Router>
        <Switch >
          <Route component={HomeAdmin} path='/admin/'></Route>

          <> {/* thêm fragment để switch không warning*/}
            <div id='App' style={{ letterSpacing: '0px' }}>
              <Header></Header>
              <Container >
                <Route component={Home} path='/' exact></Route>
                <Route component={Products} path='/products' exact></Route>
                <Route component={Products} path='/page/:page' exact></Route>
                <Route component={Products} path='/search' exact></Route>
                <Route component={ProductDetails} path='/products/:id' ></Route>
                <Route component={CartItems} path='/cart' ></Route>
                <Route component={CheckOut} path='/checkout' ></Route>
                <Route component={LoginRegister} path='/login' exact ></Route>
                <Route component={OrderDetails} path='/order/:id'></Route>
                <Route component={UserProfile} path='/profile'></Route>
              </Container>
              <Footer></Footer>
            </div>
          </>
        </Switch>
      </Router>

    </Provider >

  );
}

export default App;
