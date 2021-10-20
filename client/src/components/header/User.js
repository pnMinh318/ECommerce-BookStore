import React from 'react'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function User() {
    return (
        <>
            <Link to='/login'>
                <FiUser></FiUser>
                <h4 > Login</h4>
            </Link>


        </>

    )
}

export default User
