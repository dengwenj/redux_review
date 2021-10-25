import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count: 0,
    n: 1,
  }

  handleChange = (e) => {
    this.setState({ n: e.target.value * 1 })
  }

  increment = () => {
    const { count, n } = this.state
    this.setState({
      count: count + n,
    })
  }

  decrement = () => {
    const { count, n } = this.state
    this.setState({
      count: count - n,
    })
  }

  incrementOdd = () => {
    const { count, n } = this.state
    if (count % 2 !== 0) {
      this.setState({
        count: count + n,
      })
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      const { count, n } = this.state
      this.setState({
        count: count + n,
      })
    }, 1000)
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>当前求和为：{count}</h2>
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
