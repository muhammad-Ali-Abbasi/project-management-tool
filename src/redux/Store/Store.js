import {createStore,applyMiddleware} from "redux"
import rootReducer from "../reducers/RootReducer"
import logger from 'redux-logger'
const middleware = [logger]
const Store = createStore(rootReducer,applyMiddleware(...middleware))
export default Store