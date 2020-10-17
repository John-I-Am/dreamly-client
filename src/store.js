import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import dreamReducer from './reducers/dreamReducer'
import modalReducer from './reducers/modalReducer'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  dreams: dreamReducer,
  modal: modalReducer,
  user: userReducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store  