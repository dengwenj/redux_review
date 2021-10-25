// action 对象

import { INCREMENT, DECREMENT } from '../constan'

// 加
export const increment = (data) => ({ type: INCREMENT, data })
// 减
export const decrement = (data) => ({ type: DECREMENT, data })

// 异步 action
export const asyncAction = (data, timer) => {
  return (dispatch, getState) => {
    // console.log(getState())
    // 在这里面做异步操作
    setTimeout(() => {
      // 在异步里面也要写同步操作
      dispatch(increment(data)) // dispatch 这个函数里面写的 action 对象
    }, timer)
  }
}
