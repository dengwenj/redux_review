/* 
  该文件汇总所有的 reducer 变为一个总的 reducers
*/

// 用于汇总对个 reducer
import { combineReducers } from 'redux'
// 引入 countReducer
import count from './count'
// 引入 personReducer
import person from './person'

// 汇总所有 reducer
export default combineReducers({
  count,
  person,
})
