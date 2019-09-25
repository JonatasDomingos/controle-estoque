import { combineReducers } from 'redux'

import loginReducer from './login-reducer'
import cadastroReducer from './cadastro-reducer'


const allReducers = combineReducers({
    loginState: loginReducer,
    cadastroState: cadastroReducer
})

export default allReducers