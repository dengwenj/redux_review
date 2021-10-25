import React, { Component } from 'react'

import store from '../../redux/store'
import { increment, decrement } from '../../redux/count_action'

export default class Count extends Component {
  state = {
    n: 1,
  }

  handleChange = (e) => {
    this.setState({ n: e.target.value * 1 })
  }

  increment = () => {
    const { n } = this.state

    store.dispatch(increment(n))
  }

  decrement = () => {
    const { n } = this.state
    store.dispatch(decrement(n))
  }

  incrementOdd = () => {
    const { n } = this.state
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(increment(n))
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      const { n } = this.state
      store.dispatch(increment(n))
    }, 1000)
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select name="" id="" onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementOdd}>奇数加</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
