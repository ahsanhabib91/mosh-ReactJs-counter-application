import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

const AppTitle = () => {
  return <div className="badge badge-info">This is a Counter App</div>;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 3 },
        { id: 2, value: 2 },
        { id: 3, value: 1 },
        { id: 4, value: 0 }
      ]
    };
    console.log("App - Constructor");
  }

  componentDidMount() {
    /**
     * When a Component is mounted, that means the Component is in the DOM.
     * All the ajax call can be done here.
     */
    console.log("App - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App - componentWillUnmount");
  }

  handleIncrement = counter => {
    console.log("counterrrrrrrrrr:", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Event Called ........", counterId);
    const counters = this.state.counters.filter(count => count.id != counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - render");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <AppTitle />
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
