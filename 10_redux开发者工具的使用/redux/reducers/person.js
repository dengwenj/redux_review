import { ADD_PERSON } from '../constant'

// 初始化状态
const initState = [{ id: '001', name: 'xiaodeng', age: 21 }]
export default function personReducer(perState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...perState]

    default:
      return perState
  }
}
// 要是一个纯函数
