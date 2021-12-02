import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

import { login } from '../redux/actions/userActions'
function LoginForm({location}) {


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
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={12}>
                    <div className='popup'>
                        <Link to='/'>
                            <div className='close-btn' >&times;</div>
                        </Link>
                        <div className='form' onSubmit={(e) => submitFormHandler(e)}>
                            <form id='login-form' action='login' method='post'>
                                <div className='form-element'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='text' id='email' placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className='form-element'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' id='password' placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}></input>
                                </div>
                                {/* <div className='form-element'>
                                    <input type='checkbox' id='remember-me'></input>
                                    <label htmlFor='remember-me' id='remember'>Remember Me</label>
                                </div> */}
                                {error && <p className='text-center' style={{ color: 'red' }}>Incorrect email or password</p>}
                                <div className='form-element'>
                                    <button type='submit'  >Đăng nhập</button>
                                </div>
                                <div className='form-element'>
                                    <Link to='/'>Tạo tài khoản mới</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm
