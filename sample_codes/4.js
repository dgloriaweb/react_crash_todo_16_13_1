import React from "react";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez"
};

function getGreeting(user) {
  if (user) {
    return (
      <div tabIndex="0">
        <h1>Hello {formatName(user)}</h1>
      </div>
    );
  }
  return <h1>Hello Stranger</h1>;
}
const print = getGreeting(user);

function App() {
  return print;
}

export default App;
