// 改文件用于加工

import { INCREMENT, DECREMENT } from './constan'

const init = 0
export default function countReducer(pre = init, action) {
  // console.log(pre)
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      // console.log(pre + data)
      return (pre += data)
    case DECREMENT:
      return (pre -= data)
    default:
      return pre
  }
}
