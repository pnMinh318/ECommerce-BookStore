import axios from "axios"


const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'

const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST'
const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'

const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST'
const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS'
const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL'

const PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST'
const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS'
const PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL'

const PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST'
const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS'
const PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL'

const PRODUCT_NEWEST_REQUEST = 'PRODUCT_NEWEST_REQUEST'
const PRODUCT_NEWEST_SUCCESS = 'PRODUCT_NEWEST_SUCCESS'
const PRODUCT_NEWEST_FAIL = 'PRODUCT_NEWEST_FAIL'

export const listProducts = (seacrh = '') => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get(`/api/products?q=${seacrh}`)  //nên destructure để lấy mỗi cái data

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error
        })
    }
}
export const listNewestProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_NEWEST_REQUEST })
        const { data } = await axios.get(`/api/products/newest`)  //nên destructure để lấy mỗi cái data

        dispatch({
            type: PRODUCT_NEWEST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_NEWEST_FAIL,
            payload: error
        })
    }
}
export const productDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error
        })
    }
}

export const productDelete = (id) => async (dispatch, getState) => {
    try {

        const { user } = getState().userLogin
        dispatch({ type: PRODUCT_DELETE_REQUEST })

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        await axios.delete(`/api/products/${id}`, config)

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error
        })
    }
}

export const productCreate = (product) => async (dispatch, getState) => {
    try {
        const { user } = getState().userLogin
        dispatch({ type: PRODUCT_CREATE_REQUEST })

        const config = {
            'Content-Type': 'application/json',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const { data } = await axios.post(`/api/products/`, product, config)

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error
        })
    }
}
export const productUpdate = (product) => async (dispatch, getState) => {
    try {
        const { user } = getState().userLogin
        dispatch({ type: PRODUCT_UPDATE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            }
        }

        const { data } = await axios.put(`/api/products/${product._id}`, product, config)

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error
        })
    }
}