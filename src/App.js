import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos'
// import { render } from "@testing-library/react";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take trash out",
        completed: false
      },
      {
        id: 2,
        title: "walk the dog",
        completed: false
      },
      {
        id: 3,
        title: "eat lunch",
        completed: false
      }
    ]
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
