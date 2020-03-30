import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// end of header

class Clock extends React.Component {
  render() {
    return (
      <div className="">
        <h1>Hello World</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"))
}

setInterval(tick, 1000);
