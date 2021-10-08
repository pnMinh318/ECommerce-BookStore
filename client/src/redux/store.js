import { createStore,combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'





const reducers = combineReducers({
    cart: cartReducer
})
const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store