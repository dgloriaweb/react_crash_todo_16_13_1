import React from "react";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez"
};

function getGreeting(user) {
    if (user){
        return <h1>Hello {formatName(user)}</h1>
    }
    return <h1>Hello Stranger</h1>
}

const element = getGreeting(user);

function App() {
  return element;
}

export default App;
