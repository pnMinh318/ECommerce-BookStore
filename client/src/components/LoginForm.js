import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {


    // const openForm = ()=>{
    //     document.getElementById('popup').style.display = "none"
    // }
    const openForm = () => {
        document.querySelector('popup')
    }

    return (
        <div className='popup'>
            <Link to='/'>
                <div className='close-btn' onClick={openForm()}>&times;</div>
            </Link>
            <div className='form'>
                <h2>Login</h2>
                <form>
                    <div className='form-element'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' placeholder='Enter Email'></input>
                    </div>
                    <div className='form-element'>
                        <label htmlFor='pwd'>Password</label>
                        <input type='password' id='pwd' placeholder='Enter Password'></input>
                    </div>
                    <div className='form-element'>
                        <input type='checkbox' id='remember-me'></input>
                        <label htmlFor='remember-me'>Remember Me</label>
                    </div>
                    <div className='form-element'>
                        <button type='submit' >Sign In</button>
                    </div>
                    <div className='form-element'>
                        <a href=''>Forgot Password?</a>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginForm
