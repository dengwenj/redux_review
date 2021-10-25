// action 对象

import { INCREMENT, DECREMENT } from './constan'

// 加
export const increment = (data) => ({ type: INCREMENT, data })
// 减
export const decrement = (data) => ({ type: DECREMENT, data })
