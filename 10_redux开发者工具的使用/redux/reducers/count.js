/* 
  1 改文件是用于创建一个为 Count 组件服务的 reducer，reducer的本质是一个函数
  2 reducer 函数会接收两个参数，分别为：之前的状态（preState），动作对象（action）
*/
import { INCREMENT, DECREMENT } from '../constant'

// 初始化状态
const initState = 0
export default function reducer(preState = initState, action) {
  console.log(preState)
  const { data, type } = action
  switch (type) {
    case INCREMENT:
      return preState + data * 1
    case DECREMENT:
      return preState - data * 1
    default:
      return preState
  }
}
