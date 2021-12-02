import axios from "axios"

const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
const USER_LOGOUT = 'USER_LOGOUT'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers: { 'Content-Type': 'application/json' }
        }
        console.log('actions', email, password)
        const { data } = await axios.post('/api/users/login', { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error //chưa xong
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('user')
    dispatch({ type: USER_LOGOUT })
}