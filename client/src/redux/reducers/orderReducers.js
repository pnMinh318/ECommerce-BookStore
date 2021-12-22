const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST'
const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS'
const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL'
const ORDER_CREATE_RESET = 'ORDER_CREATE_RESET'

const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST'
const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS'
const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL'
const ORDER_DETAILS_RESET = 'ORDER_DETAILS_RESET'

const ORDER_CURRENT_USER_REQUEST = 'ORDER_CURRENT_USER_REQUEST'
const ORDER_CURRENT_USER_SUCCESS = 'ORDER_CURRENT_USER_SUCCESS'
const ORDER_CURRENT_USER_FAIL = 'ORDER_CURRENT_USER_FAIL'
const ORDER_CURRENT_USER_RESET = 'ORDER_CURRENT_USER_RESET'

const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST'
const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS'
const ORDER_LIST_FAIL = 'ORDER_LIST_FAIL'
const ORDER_LIST_RESET = 'ORDER_LIST_RESET'

const ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST'
const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS'
const ORDER_PAY_FAIL = 'ORDER_PAY_FAIL'
const ORDER_PAY_RESET = 'ORDER_PAY_RESET'

const ORDER_DELIVER_REQUEST = 'ORDER_DELIVER_REQUEST'
const ORDER_DELIVER_SUCCESS = 'ORDER_DELIVER_SUCCESS'
const ORDER_DELIVER_FAIL = 'ORDER_DELIVER_FAIL'
const ORDER_DELIVER_RESET = 'ORDER_DELIVER_RESET'


export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true }
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
                order: {},
            }
        case ORDER_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const orderDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { loading: true }
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case ORDER_DETAILS_RESET:
            return {}
        default:
            return state
    }
}
export const ordersMyListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_CURRENT_USER_REQUEST:
            return { loading: true }
        case ORDER_CURRENT_USER_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case ORDER_CURRENT_USER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case ORDER_CURRENT_USER_RESET:
            return {
                ...state,
                orders: []
            }
        default:
            return state
    }
}
export const ordersListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true }
        case ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case ORDER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case ORDER_LIST_RESET:
            return {
                ...state,
                orders: []
            }
        default:
            return state
    }
}
export const orderDeliverReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DELIVER_REQUEST:
            return { loading: true }
        case ORDER_DELIVER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ORDER_DELIVER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case ORDER_DELIVER_RESET:
            return {}
        default:
            return state
    }
}
export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return { loading: true }
        case ORDER_PAY_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ORDER_PAY_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case ORDER_PAY_RESET:
            return {}
        default:
            return state
    }
}