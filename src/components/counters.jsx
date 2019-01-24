import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidMount() {
    /**
     * When a Component is mounted, that means the Component is in the DOM.
     * All the ajax call can be done here.
     */
    console.log("Counters - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counters - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Counters - componentWillUnmount");
  }

  render() {
    console.log("Counters - render");
    const { onClick, onDelete, onIncrement, onDecrement, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter, index) => (
          <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
