import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement, asyncAction } from '../../redux/action/count'

class Count extends Component {
  state = {
    n: 1,
  }

  handleChange = (e) => {
    this.setState({ n: e.target.value * 1 })
  }

  increment = () => {
    const { n } = this.state

    // 在 ul 组件中看不到关于 redux 任何东西
    this.props.increment(n)
  }

  decrement = () => {
    const { n } = this.state
    this.props.decrement(n)
  }

  incrementOdd = () => {
    const { n } = this.state
    const { count } = this.props
    if (count % 2 !== 0) {
      this.props.increment(n)
    }
  }

  incrementAsync = () => {
    const { n } = this.state
    // store.dispatch(asyncAction(n, 1000))
    this.props.asyncAction(n, 1000)
  }

  render() {
    const { count, person } = this.props
    return (
      <div>
        <h2>当前求和为：{count}</h2>
        <h3>下方组件的人数为：{person.length}</h3>
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

export default connect(
  (state) => {
    return {
      count: state.countReducer,
      person: state.personReducer,
    }
  }, // 数据的
  // (dispatch) => {
  //   return {
  //     increment(data) {
  //       dispatch(increment(data))
  //     },
  //     decrement(data) {
  //       dispatch(decrement(data))
  //     },
  //     asyncAction(data, timer) {
  //       dispatch(asyncAction(data, timer))
  //     },
  //   }
  // } // 操作方法的
  {
    increment, // 是一个函数 返回的就是 action 要个 action 就行了,底层会自己加 dispatch
    decrement,
    asyncAction,
  }
)(Count)
