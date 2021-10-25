import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import countReducer from './reducers/count'
import personReducer from './reducers/person'

const store = createStore(
  // 合并的，存多个数据
  combineReducers({
    countReducer,
    personReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
) // 这里面放的是 reducer

export default store
