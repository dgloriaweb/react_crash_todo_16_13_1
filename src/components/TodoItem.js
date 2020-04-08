import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px black dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  }

  // markComplete = (e) => {
  //   console.log(this.props)
  // }

  // deleteTodoItem = (e) => {
  //   console.log(this.props)
  // }

  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title} &nbsp;
          <button style={{border:'none', backgroundColor:'red', color:'white', fontSize:'20px'}} onClick={this.props.deleteTodoItem.bind(this, id)}>
            &times;
          </button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired
}

export default TodoItem
