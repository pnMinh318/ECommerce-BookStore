import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

import { login, register } from '../redux/actions/userActions'
import Spinners from './Spinners'
import '../assets/login.css'
function LoginForm({ location }) {


    const history = useHistory();
    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state => state.userLogin)
    const { user, error: errorLogin } = userLogin

    const userRegister = useSelector(state => state.userRegister)
    const { loading: loadingRegister, success: successRegister, error: errorRegister } = userRegister
    //Login
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //Register
    const [emailRegister, setEmailRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [nameRegister, setNameRegister] = useState('')

    const submitLoginHandler = async (e) => {
        e.preventDefault()
        await dispatch(login(email, password))
    }
    const submitRegisterHandler = (e) => {
        e.preventDefault()
        console.log(emailRegister, passwordRegister, nameRegister)
        dispatch(register(emailRegister, passwordRegister, nameRegister))
    }
    useEffect(() => {
        if (user)
            history.push(redirect);
    })
    return (
        <Row className='my-5'>
            {/* Đăng nhập */}
            <Col xl={6} md={6} className='pr-5' style={{ borderRight: '1px solid #dfdfdf' }}>
                <p className='mb-4 text-uppercase font1p2'>Đăng nhập</p>
                <Form className='px-5' onSubmit={(e) => submitLoginHandler(e)}>
                    <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email:</Form.Label>
                        <input className='py-2 px-4 login__input w-100'
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Mật khẩu:</Form.Label>
                        <input className='py-2 px-4 login__input w-100'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </Form.Group>
                    <div className='text-center mt-3'>
                        <button type='submit'
                            className='py-2 px-5 login__button'
                        >Xác nhận</button>
                    </div>
                    {errorLogin &&
                        <p className='text-center mt-3'
                            style={{ color: 'red' }}>
                            Sai Email hoặc mật khẩu! Hãy kiểm tra lại</p>}
                </Form>
            </Col>
            {/* Đăng ký */}
            <Col xl={6} md={6} className='pl-5'>
                {
                    loadingRegister ?
                        <Spinners></Spinners> : (
                            <>
                                <p className='mb-4 text-uppercase font1p2'>Đăng Ký</p>
                                <Form className='px-5' onSubmit={(e) => submitRegisterHandler(e)}>
                                    <Form.Group className="mb-3" controlId="registerName">
                                        <Form.Label>Họ Tên:</Form.Label>
                                        <input className='py-2 px-4 login__input w-100'
                                            onChange={(e) => setNameRegister(e.target.value)}
                                        ></input>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="registerEmail">
                                        <Form.Label>Email:</Form.Label>
                                        <input className='py-2 px-4 login__input w-100'
                                            type='email'
                                            autoComplete='off'
                                            onChange={(e) => setEmailRegister(e.target.value)}
                                        ></input>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="registerPassword">
                                        <Form.Label>Mật khẩu:</Form.Label>
                                        <input className='py-2 px-4 login__input w-100'
                                            type='password'
                                            onChange={(e) => setPasswordRegister(e.target.value)}
                                        ></input>
                                    </Form.Group>

                                    <div className='text-center mt-3'>
                                        <button type='submit'
                                            className='py-2 px-5 login__button'
                                            value='Xác nhận'
                                        >Xác nhận</button>
                                    </div>
                                    {successRegister ?
                                        <p className='text-center mt-3'
                                            style={{ color: 'green' }}>
                                            Đăng ký thành công</p> :
                                        errorRegister &&
                                        <p className='text-center mt-3'
                                            style={{ color: 'red' }}>
                                            {errorRegister.error}</p>}
                                </Form>
                            </>)
                }
            </Col>
        </Row>
    )
}

export default LoginForm
