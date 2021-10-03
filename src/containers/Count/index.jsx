import React, { Component } from 'react'

// 引入 actions
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

// 引入 connect 用于连接 UI 组件与 redux
import { connect } from 'react-redux'

// 定义 UI 组件
class Count extends Component {
  state = { changValue: 1 }

  hendleChange = (e) => {
    this.setState({ changValue: parseInt(e.target.value) })
  }

  // 加
  increment = () => {
    const { changValue } = this.state
    this.props.increment(changValue)
  }
  // 减
  decrement = () => {
    const { changValue } = this.state
    this.props.decrement(changValue)
  }
  // 奇数加
  incrementOdd = () => {
    const { changValue } = this.state
    if (this.props.count % 2 !== 0) {
      this.props.increment(changValue)
    }
  }
  // 异步加
  incrementAsync = () => {
    const { changValue } = this.state
    this.props.incrementAsync(changValue, 1000)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>我是Count组件，下方组件的总人数为：{this.props.persons}</h1>
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

// 使用 connect()()创建并暴露一个 Count 的 容器组件
export default connect(
  (state) => ({ count: state.count, persons: state.person.length }),

  // mapDispatchToProps 是一个对象 简写
  {
    increment, // 是一个函数 返回的就是 action 要个 action 就行了
    decrement,
    incrementAsync,
  }
)(Count)
