import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// store.subscribe(() => {
//   // 检测 redux 中状态的变化，只要变化，就调用 render
//   ReactDOM.render(<App />, document.getElementById('root'))
// })
