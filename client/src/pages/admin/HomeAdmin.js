import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import '../../assets/admin.css'
// import store from './redux/store';
import User from '../../components/header/User';
// import Footer from './components/Footer/Footer';
// import LoginForm from './components/LoginForm';

// import Home from './pages/Home';
// import CheckOut from './pages/CheckOut'
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import CartItems from './pages/CartItems';
//import UserProfile from './ofile';
import UsersListAdmin from './UsersListAdmin';
import UserEditAdmin from './UserEditAdmin';
import ProductsListAdmin from './ProductsListAdmin';
import ProductCreateAdmin from './ProductCreateAdmin';
import ProductUpdateAdmin from './ProductUpdateAdmin'
import OrdersListAdmin from './OrdersListAdmin';
import OrderDetails from '../OrderDetails';
function HomeAdmin() {
    return (
        // <Router>
            <div>
                <div className="header">
                    <div className='header__nav '>
                        <Link
                            to='/'
                            className='text-decoration-none'
                        >Home </Link>
                    </div>
                    <div className="header-right">
                        <User ></User>
                    </div>
                </div>
                <div className="sidenav">
                    {/* <button onClick={() => { history.push('/admin/products-list') }}>products</button>
                <Link to='/admin/products-list'>products</Link> */}
                    <Link to="/admin/products-list">Sản phẩm</Link>
                    <Link to="/admin/users-list">Người dùng</Link>
                    <Link to="/admin/orders-list">Đơn hàng</Link>
                </div>
                <Container >
                    <Route component={UsersListAdmin} path='/admin/users-list'></Route>
                    <Route component={UserEditAdmin} path='/admin/user/:id/edit'></Route>
                    <Route component={ProductsListAdmin} path='/admin/products-list'></Route>
                    <Route component={ProductCreateAdmin} path='/admin/product/create'></Route>
                    <Route component={ProductUpdateAdmin} path='/admin/product/:id/edit'></Route>
                    <Route component={OrdersListAdmin} path='/admin/orders-list'></Route>
                    <Route component={OrderDetails} path='/admin/order/:id'></Route>
                </Container>
            </div>
        // </Router>
    )
}

export default HomeAdmin
