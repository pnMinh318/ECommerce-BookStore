import axios from "axios"

const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST'
const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS'
const ORDER_LIST_FAIL = 'ORDER_LIST_FAIL'

const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST'
const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS'
const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL'

const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST'
const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS'
const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL'

const ORDER_CURRENT_USER_REQUEST = 'ORDER_CURRENT_USER_REQUEST'
const ORDER_CURRENT_USER_SUCCESS = 'ORDER_CURRENT_USER_SUCCESS'
const ORDER_CURRENT_USER_FAIL = 'ORDER_CURRENT_USER_FAIL'

const ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST'
const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS'
const ORDER_PAY_FAIL = 'ORDER_PAY_FAIL'

const ORDER_DELIVER_REQUEST = 'ORDER_DELIVER_REQUEST'
const ORDER_DELIVER_SUCCESS = 'ORDER_DELIVER_SUCCESS'
const ORDER_DELIVER_FAIL = 'ORDER_DELIVER_FAIL'
// const ORDER_CURRENT_USER_RESET='ORDER_CURRENT_USER_RESET'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        })
        const { user } = getState().userLogin
        console.log('token', user.token)
        console.log(order)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            }
        }
        const { data } = await axios.post('/api/orders', order, config)
        if (data) {
            dispatch({
                type: ORDER_CREATE_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        alert('Đặt hàng thất bại')
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error
        })
    }

}
export const orderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST,
        })
        const { user } = getState().userLogin
        console.log('token', user.token)
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/${id}`, config)
        if (data) {
            dispatch({
                type: ORDER_DETAILS_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error
        })
    }
}
export const ordersByCurrentUser = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CURRENT_USER_REQUEST,
        })
        const { user } = getState().userLogin
        console.log('token', user.token)
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const { data } = await axios.get('/api/orders/myorders', config)
        if (data) {
            dispatch({
                type: ORDER_CURRENT_USER_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        dispatch({
            type: ORDER_CURRENT_USER_FAIL,
            payload: error
        })
    }
}
export const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_REQUEST,
        })
        const { user } = getState().userLogin
        console.log('token', user.token)
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const { data } = await axios.get('/api/orders', config)
        if (data) {
            dispatch({
                type: ORDER_LIST_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error
        })
    }
}

export const deliverOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DELIVER_REQUEST,
        })
        const { user } = getState().userLogin
        console.log('token', user.token)
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const { data } = await axios.put(`/api/orders/${id}/deliver`, {}, config)
        if (data) {
            dispatch({
                type: ORDER_DELIVER_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        dispatch({
            type: ORDER_DELIVER_FAIL,
            payload: error
        })
    }
}

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST,
        })
        const { user } = getState().userLogin
        console.log('token', user.token)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            }
        }
        const { data } = await axios.put(`/api/orders/${id}/pay`, paymentResult, config)
        if (data) {
            dispatch({
                type: ORDER_PAY_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error
        })
    }
}