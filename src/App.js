import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ButtonGrid from "./components/ButtonGrid";
import Header from "./components/Header";
import Display from "./components/Display";

@inject("store")
@observer
class App extends Component {
  incrementCounter = () => {
    this.props.store.increment();
  };

  decrementCounter = () => {
    this.props.store.decrement();
  };

  render() {
    return (
      <div
        className="blue lighten-4"
        style={{
          height: "100vh"
        }}
      >
        <Header />
        <div className="center-align">
          <Display />
          <ButtonGrid />
        </div>
      </div>
    );
  }
}

export default App;
