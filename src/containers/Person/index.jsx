import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'

import { addPerson } from '../../redux/actions/person'

class Person extends Component {
  ageNode = createRef()

  add = () => {
    const name = this.nameNode.value
    const age = this.ageNode.current.value
    const data = { id: Date.now(), name, age }
    this.props.addPerson(data)
  }

  render() {
    return (
      <div>
        <h1>我是Person组件，上方组件求和为：{this.props.count}</h1>
        <input
          ref={(c) => {
            this.nameNode = c
          }}
          type="text"
          placeholder="输入姓名"
        />
        <input ref={this.ageNode} type="text" placeholder="输入年龄" />
        <button onClick={this.add}>添加</button>
        <ul>
          {this.props.persons.map((p) => {
            return (
              <li key={p.id}>
                {p.name}--{p.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

// 容器组件
export default connect(
  (state) => ({
    persons: state.person,
    count: state.count,
  }),
  {
    addPerson,
  }
)(Person)
