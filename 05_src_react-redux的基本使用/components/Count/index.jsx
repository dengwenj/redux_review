import React, { Component } from 'react'

export default class Count extends Component {
  state = { changValue: 1 }

  hendleChange = (e) => {
    this.setState({ changValue: parseInt(e.target.value) })
  }

  // 加
  increment = () => {
    const { changValue } = this.state
    this.props.jia(changValue)
  }
  // 减
  decrement = () => {
    const { changValue } = this.state
    this.props.jian(changValue)
  }
  // 奇数加
  incrementOdd = () => {
    const { changValue } = this.state
    if (this.props.count % 2 !== 0) {
      this.props.jia(changValue)
    }
  }
  // 异步加
  incrementAsync = () => {
    const { changValue } = this.state
    this.props.asyncJia(changValue)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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
