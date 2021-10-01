import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  state = { changValue: 1 }

  hendleChange = (e) => {
    this.setState({ changValue: parseInt(e.target.value) })
  }

  // 加
  increment = () => {
    const { changValue } = this.state
    store.dispatch({ type: 'increment', data: changValue })
  }
  // 减
  decrement = () => {
    const { changValue } = this.state
    store.dispatch({ type: 'decrement', data: changValue })
  }
  // 奇数加
  incrementOdd = () => {
    const { changValue } = this.state
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch({ type: 'increment', data: changValue })
    }
  }
  // 异步加
  incrementAsync = () => {
    const { changValue } = this.state
    setTimeout(() => {
      store.dispatch({ type: 'increment', data: changValue })
    }, 1000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select onChange={this.hendleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
