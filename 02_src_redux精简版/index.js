import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/store'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

store.subscribe(() => {
  // 检测 redux 中状态的变化，只要变化，就调用 render
  ReactDOM.render(<App />, document.getElementById('root'))
})
