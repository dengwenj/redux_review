/* 
  改文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
*/

// 引入 createStore，专门用于创建 redux 中最为核心的 store 对象
import { createStore, applyMiddleware } from 'redux'
// 引入 redux-thunk 用于 异步 action
import thunk from 'redux-thunk'
// 引入 redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// 引入汇总之后的 reducer
import reducers from './reducers'

// 创建 stroe 对象并暴露
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
