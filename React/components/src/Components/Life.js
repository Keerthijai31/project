import React, { Component } from 'react';
class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor is called");
  }

  componentDidMount() {
    console.log("ComponentDidMount is called");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate is called");
    console.log("Previous State: ", prevState);
    console.log("Current State: ", this.state);
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount is called");
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("Render is called");
    return (
      <div>
        <h1>React Class Component Lifecycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
