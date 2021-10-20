import axios from "axios"


const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'

const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST'
const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'



export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')//.then((res) => {return(res)}).catch(res => res.error)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error //chưa xong
        })
    }
}
export const productDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)  //nên destructure để lấy mỗi cái data

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error //chưa xong
        })
    }
}