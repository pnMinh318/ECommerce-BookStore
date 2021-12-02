import axios from "axios"

const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST'
const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS'
const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL'




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
        console.log('test actions')

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