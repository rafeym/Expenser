import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk]

const INIT_STATE = {}

const store = createStore(
    rootReducer,
    INIT_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
