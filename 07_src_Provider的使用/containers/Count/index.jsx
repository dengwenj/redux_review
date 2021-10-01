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

// 使用 connect()()创建并暴露一个 Count 的 容器组件
export default connect(
  (state) => ({ count: state }),

  // mapDispatchToProps 是一个函数
  // (dispatch) => ({
  //   jia(number) {
  //     dispatch(createIncrementAction(number))
  //   },
  //   jian(number) {
  //     dispatch(createDecrementAction(number))
  //   },
  //   asyncJia(number, time) {
  //     dispatch(createIncrementAsyncAction(number, time))
  //   },
  // })

  // mapDispatchToProps 是一个对象 简写
  {
    jia: createIncrementAction, // 是一个函数 返回的就是 action 要个 action 就行了
    jian: createDecrementAction,
    asyncJia: createIncrementAsyncAction,
  }
)(countUI)
