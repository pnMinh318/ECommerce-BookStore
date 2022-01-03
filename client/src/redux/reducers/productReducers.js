
const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'

const PRODUCT_NEWEST_REQUEST = 'PRODUCT_NEWEST_REQUEST'
const PRODUCT_NEWEST_SUCCESS = 'PRODUCT_NEWEST_SUCCESS'
const PRODUCT_NEWEST_FAIL = 'PRODUCT_NEWEST_FAIL'

const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST'
const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'

const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST'
const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS'
const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL'

const PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST'
const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS'
const PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL'
const PRODUCT_CREATE_RESET = 'PRODUCT_CREATE_RESET'

const PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST'
const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS'
const PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL'
const PRODUCT_UPDATE_RESET = 'PRODUCT_UPDATE_RESET'

export const productListReducer = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.totalPages,
                page: action.payload.currentPage
            }
        case PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state

    }
}
export const productNewestReducer = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_NEWEST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_NEWEST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_NEWEST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state

    }
}

export const productDetailsReducer = (state = { loading: true, product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                product: {}
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case PRODUCT_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                product: action.payload
            }
        case PRODUCT_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state
    }
}
export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case PRODUCT_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case PRODUCT_UPDATE_RESET:
            return {}
        default:
            return state
    }
}