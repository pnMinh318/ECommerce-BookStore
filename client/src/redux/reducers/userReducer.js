const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
const USER_LOGOUT = 'USER_LOGOUT'

const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'
const USER_REGISTER_RESET = 'USER_REGISTER_RESET'

//admin
const USER_LIST_REQUEST = 'USER_LIST_REQUEST'
const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'
const USER_LIST_FAIL = 'USER_LIST_FAIL'
const USER_LIST_RESET = 'USER_LIST_RESET'

const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'
const USER_DETAILS_RESET = 'USER_DETAILS_RESET'

const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST'
const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
const USER_DELETE_FAIL = 'USER_DELETE_FAIL'

const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL'
const USER_UPDATE_RESET = 'USER_UPDATE_RESET'

const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST'
const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL'
const USER_PROFILE_RESET = 'USER_PROFILE_RESET'


const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST'
const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS'
const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL'
const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {}
        default:
            return state

    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_REGISTER_RESET:
            return {}
        default:
            return state

    }
}
export const usersListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {
                loading: true
            }
        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case USER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_LIST_RESET:
            return {
                ...state,
                users: []
            }
        default:
            return state

    }
}
export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                loading: true
            }
        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_DETAILS_RESET:
            return {
                ...state,
                user: {}
            }
        default:
            return state

    }
}
export const usersUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return {
                loading: true
            }
        case USER_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case USER_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_UPDATE_RESET:
            return {
                user: {}
            }
        default:
            return state
    }
}
export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {
                loading: true
            }
        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case USER_UPDATE_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_UPDATE_PROFILE_RESET:
            return {}
        default:
            return state
    }
}
export const userProfileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return {
                loading: true
            }
        case USER_PROFILE_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                success: true,
            }
        case USER_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_PROFILE_RESET:
            return {}
        default:
            return state
    }
}
export const usersDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return {
                loading: true
            }
        case USER_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case USER_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}