/* 
  1 改文件是用于创建一个为 Count 组件服务的 reducer，reducer的本质是一个函数
  2 reducer 函数会接收两个参数，分别为：之前的状态（preState），动作对象（action）
*/

// 初始化状态
const initValue = 0
export default function reducer(preValue = initValue, action) {
  console.log(preValue)
  const { data, type } = action
  switch (type) {
    case 'increment':
      return preValue + data * 1
    case 'decrement':
      return preValue - data * 1
    default:
      return preValue
  }
}
