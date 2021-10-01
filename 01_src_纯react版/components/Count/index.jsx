import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    changValue: 1,
    count: 0,
  }

  hendleChange = (e) => {
    // const { changValue } = this.state
    this.setState({ changValue: parseInt(e.target.value) })
  }

  // 加
  increment = () => {
    const { changValue, count } = this.state
    this.setState({ count: count + changValue })
  }
  // 减
  decrement = () => {
    const { changValue, count } = this.state
    this.setState({ count: count - changValue })
  }
  // 奇数加
  incrementOdd = () => {
    const { changValue, count } = this.state
    if (count % 2 !== 0) {
      this.setState({ count: count + changValue })
    }
  }
  // 异步加
  incrementAsync = () => {
    const { changValue, count } = this.state
    setTimeout(() => {
      this.setState({ count: count + changValue })
    }, 1000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
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
