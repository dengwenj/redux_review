import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addPerson, asyncPerson } from '../../redux/action/perosn'

class Person extends Component {
  state = {
    value: '',
  }
  ref = createRef()

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  add = () => {
    this.props.addPerson(this.state.value)
    this.ref.current.value = ''
  }

  asyncAdd = () => {
    this.props.asyncPerson()
  }

  render() {
    console.log(this)
    const { person } = this.props
    return (
      <div>
        <h3>上方组件的求和为：{this.props.count}</h3>
        <input ref={this.ref} type="text" onChange={this.handleChange} />
        <button onClick={this.add}>添加一个人</button>
        <button onClick={this.asyncAdd}>随机添加一个人</button>
        <ul>
          {person.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      person: state.personReducer,
      count: state.countReducer,
    }
  },
  { addPerson, asyncPerson }
)(Person)
