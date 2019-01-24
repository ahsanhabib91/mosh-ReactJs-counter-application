import React, { Component } from "react";

/**
 * Controlled Component: Does not have its own local state. It receives all the data via its props and raises events when data needs to be changed.
 *                       So this Component entirely controlled by its parent.
 *
 * Sharing "state data" between Components: In this case, state data needs to be moved in the parent Component where all other Chiild Components have accessed.
 */

class Counter extends Component {
  styles = {
    fontSize: 25,
    fontWeight: "bold"
  };

  componentDidMount() {
    /**
     * When a Component is mounted, that means the Component is in the DOM.
     * All the ajax call can be done here.
     */
    console.log("Counter - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value != this.props.counter.value) {
      console.log("Counter Value Changed");
    }
  }

  componentWillUnmount() {
    console.log("Counter - componentWillUnmount");
  }

  render() {
    console.log("Counter - render");
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.props.counter.value}
          </span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? true : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
