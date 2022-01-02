import axios from "axios"

const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
const USER_LOGOUT = 'USER_LOGOUT'

const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'
const USER_DETAILS_RESET = 'USER_DETAILS_RESET'

const ORDER_CURRENT_USER_RESET = 'ORDER_CURRENT_USER_RESET'
const ORDER_LIST_RESET = 'ORDER_LIST_RESET'
//admin
const USER_LIST_REQUEST = 'USER_LIST_REQUEST'
const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'
const USER_LIST_FAIL = 'USER_LIST_FAIL'
const USER_LIST_RESET = 'USER_LIST_RESET'

const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST'
const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
const USER_DELETE_FAIL = 'USER_DELETE_FAIL'

const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL'

const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST'
const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL'

const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST'
const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS'
const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL'

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

export const register = (email,password,name) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers: { 'Content-Type': 'application/json' }
        }
        const { data } = await axios.post('/api/users', { email, password,name }, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error //chưa xong
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('user')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_LIST_RESET })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: ORDER_CURRENT_USER_RESET })
    dispatch({ type: ORDER_LIST_RESET })
}


export const listUsers = () => async (dispatch, getState) => {
    try {
        const { user } = getState().userLogin
        console.log(user)
        dispatch({
            type: USER_LIST_REQUEST
        })
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }
        console.log(user.token)
        const { data } = await axios.get('/api/users', config)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error //chưa xong
        })
    }
}
export const getUserDetailsByID = (id) => async (dispatch, getState) => {
    try {
        const { user } = getState().userLogin
        dispatch({
            type: USER_DETAILS_REQUEST
        })
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }
        console.log(user.token)
        const { data } = await axios.get(`/api/users/${id}`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error //chưa xong
        })
    }
}
export const updateUserProfile = (userUpdate) => async (dispatch, getState) => {
    try {
        const { user } = getState().userLogin
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })
        const config = {
            'Content-Type': 'application/json',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        console.log(user.token)
        const { data } = await axios.put(`/api/users/profile`, userUpdate, config)
        if (data) {
            dispatch({ type: USER_UPDATE_PROFILE_SUCCESS })
            dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
        } else {
            dispatch({
                type: USER_UPDATE_PROFILE_FAIL,
                payload: { message: '' }
            })
        }
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error
        })
    }
}
export const getUserProfile = () => async (dispatch, getState) => {
    try {
        const { user } = getState().userLogin
        dispatch({
            type: USER_PROFILE_REQUEST
        })
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const { data } = await axios.get(`/api/users/profile`, config)
        dispatch({ type: USER_PROFILE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error
        })
    }
}
export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        const { user } = getState().userLogin
        dispatch({
            type: USER_DELETE_REQUEST
        })
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }
        console.log(user.token)
        await axios.delete(`/api/users/${id}`, config)
        dispatch({
            type: USER_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error //chưa xong
        })
    }
}

export const updateUser = (userUpdate) => async (dispatch, getState) => {
    try {
        const { user } = getState().userLogin
        dispatch({
            type: USER_UPDATE_REQUEST
        })
        const config = {
            'Content-Type': 'application/json',
            headers: { Authorization: `Bearer ${user.token}` }
        }
        console.log(user.token)
        const { data } = await axios.put(`/api/users/${userUpdate._id}`, userUpdate, config)
        dispatch({ type: USER_UPDATE_SUCCESS })
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error //chưa xong
        })
    }
}