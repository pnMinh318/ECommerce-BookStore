import React from 'react'
import { useSelector } from 'react-redux'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function User() {

    const { user } = useSelector(state => state.userLogin)

    return (
        <>

                <Link to='/login'>
                    <FiUser></FiUser>
                    {user ? (<h4>{user.name}</h4>) :
                        <h4 > Login </h4>}
                </Link>



        </>

    )
}

export default User
