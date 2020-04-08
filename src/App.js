import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/layout/Header'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { v4 as uuid } from 'uuid'
import About from './components/pages/About'
// import { render } from '@testing-library/react'

class App extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos:res.data}))
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        todo.completed = todo.id === id ? !todo.completed : todo.completed
        return todo
      }),
    })
  }
  deleteTodoItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id: uuid,
      title,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodoItem={this.deleteTodoItem}
                  />
                </React.Fragment>
              )}
            ></Route>
            <Route path='/about' component={About}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
