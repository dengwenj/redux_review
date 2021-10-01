// 引入 Count 的 UI 组件
import countUI from '../../components/Count'

// 引入 actions
import {
  createDecrementAction,
  createIncrementAsyncAction,
  createIncrementAction,
} from '../../redux/count_action'

// 引入 connect 用于连接 UI 组件与 redux
import { connect } from 'react-redux'

/* 
  1 mapStateToProps 函数返回的是一个对象
  2 返回的对象中的 key 就作为传递给 UI 组件 props 的 key，value 就作为传递给 UI 组件 props 的 value
  3 mapStateToProps 用于传递状态
*/
function mapStateToProps(state) {
  return { count: state } // 作为状态传递了 UI 组件
}

/* 
  1 mapDispatchToProps 函数返回的是一个对象
  2 返回的对象中的 key 就作为传递给 UI 组件 props 的 key，value 就作为传递给 UI 组件 props 的 value
  3 mapDispatchToProps 用于操作状态的方法
*/
function mapDispatchToProps(dispatch) {
  return {
    jia(number) {
      dispatch(createIncrementAction(number))
    },
    jian(number) {
      dispatch(createDecrementAction(number))
    },
    asyncJia(number) {
      dispatch(createIncrementAsyncAction(number))
    },
  }
}

// 使用 connect()()创建并暴露一个 Count 的 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(countUI)
