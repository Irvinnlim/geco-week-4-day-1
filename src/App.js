import React, { Component } from "react";
import Form from "./Form";
import Display from "./Display";
import NavBar from "./NavBar";

class App extends Component {
  state = {
    personData: [],
  };

  addData = (user) => {
    console.log(user);
    let personData = [...this.state.personData, user];
    this.setState({ personData });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Form addData={this.addData} />
        <Display personData={this.state.personData} />
      </div>
    );
  }
}

export default App;
