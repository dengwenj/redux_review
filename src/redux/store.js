import { createStore } from 'redux'
import countReducer from './count_reducer'

const store = createStore(countReducer) // 这里面放的是 reducer

export default store
