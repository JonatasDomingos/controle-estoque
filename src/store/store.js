import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import allReducer from '../reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(
    allReducer,
    composeEnhancer(applyMiddleware(thunk)),
)

export default myStore