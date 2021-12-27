import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

import { login } from '../redux/actions/userActions'

import '../assets/login.css'
function LoginForm({ location }) {


    const history = useHistory();
    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state => state.userLogin)
    const { user, error } = userLogin

    // useEffect(() => {
    //     if (user) {

    //     }
    // }, [user])



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitFormHandler = async (e) => {
        e.preventDefault()
        //dispatch login
        console.log(email, password)
        await dispatch(login(email, password))
    }
    useEffect(() => {
        if (user)
            history.push(redirect);
    })
    return (

        <div className='center'>
            <Link to='/' ><span style={{ marginLeft: '10px', color: 'red', fontSize: '20px' }}>&times;</span></Link>
            <h4>Đăng nhập</h4>
            <form id='login-form' action='login' method='post' 
            onSubmit={(e) => submitFormHandler(e)}>
                <div className='text_field'>
                    <span>Email</span>
                    <input type='text' id='email' placeholder='Nhập Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='text_field'>
                    <span>Mật khẩu</span>
                    <input type='password' id='password' placeholder='Nhập mật khẩu'
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='text-center'>
                    <button type='submit'  >Xác nhận</button>
                </div>
                <div className='text-left ml-3'>
                    <Link to='/'>Tạo tài khoản</Link>
                </div>
                {error && <p className='text-center' style={{ color: 'red' }}>Incorrect email or password</p>}
            </form>
        </div>
    )
}

export default LoginForm
