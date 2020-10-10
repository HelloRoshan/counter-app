import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    // Do CleanUp for component like timers, listeners to avoid memory leakage
    console.log('Counter - UnMount');
  }
  styles = {
    marginRight: "1rem",
    width: "2rem",
  };
  returnValue = () => {
    const { value } = this.props.counter
    return value === 0 ? "Zero" : value;
  };
  getBadgeClasses = () => {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes
  }
  render() {
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.returnValue()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
}

export default Counter;
