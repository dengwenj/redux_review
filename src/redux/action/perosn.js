import { ADDPERSON } from '../constan'
import axios from 'axios'

export const addPerson = (data) => ({ type: ADDPERSON, data })

// 异步 action 返回一个函数
export const asyncPerson = (data) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      // 里面写异步
        try {
          const {
            data: { result },
          } = await axios({
            method: 'GET',
            url: 'https://api.apiopen.top/recommendPoetry',
          })
          dispatch(addPerson(result))
          resolve('成功')
        } catch (error) {
          reject('失败')
        }
    })
  }
}
