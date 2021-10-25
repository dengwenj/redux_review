import { ADDPERSON } from '../constan'
import axios from 'axios'

export const addPerson = (data) => ({ type: ADDPERSON, data })

// 异步 action 返回一个函数
export const asyncPerson = (data) => {
  return async (dispatch, getState) => {
    // 里面写异步
    const {
      data: { result },
    } = await axios({
      method: 'GET',
      url: 'https://api.apiopen.top/recommendPoetry',
    })
    console.log(result)
    dispatch(addPerson(result))
  }
}
