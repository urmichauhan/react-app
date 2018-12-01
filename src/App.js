import React, { Component } from "react";
import Navbar from "./components/navbar";

import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, val: 0 },
      { id: 2, val: 3 },
      { id: 3, val: 0 },
      { id: 4, val: 7 }
    ]
  };

  handledelete = counterid => {
    const counters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters });
    console.log("Event handle", counterid);
  };

  handlereset = () => {
    const counters = this.state.counters.map(c => {
      c.val = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleincrement = counter => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    counters[i] = { ...counter };
    counters[i].val++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalcounters={this.state.counters.filter(c => c.val > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handlereset}
            onIncrement={this.handleincrement}
            onDelete={this.handledelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
