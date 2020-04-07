import React, { Component } from "react"
import "./App.css"
import Todos from "./components/Todos"
// import { render } from "@testing-library/react"

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take trash out",
        completed: false,
      },
      {
        id: 2,
        title: "walk the dog",
        completed: false,
      },
      {
        id: 3,
        title: "eat lunch",
        completed: false,
      },
    ],
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

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodoItem={this.deleteTodoItem}
        />
      </div>
    )
  }
}

export default App
