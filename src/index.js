import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/store'

ReactDOM.render(
  // 这样就可以不用一直在容器组件里面写 store={store} 了 ，统一处理了

  <App />,
  document.getElementById('root')
)

// 用了 react-redux 就可以不用写这个了
store.subscribe(() => {
  // 检测 redux 中状态的变化，只要变化，就调用 render
  ReactDOM.render(<App />, document.getElementById('root'))
})
