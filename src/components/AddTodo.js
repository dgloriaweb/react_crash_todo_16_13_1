import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='add todo...'
          style={{ flex: '10', padding: '5px' }}
        />
        <input
          className='btn'
          type='submit'
          value='Submit'
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

export default AddTodo
