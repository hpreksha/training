import React, { Component } from 'react'

export class ComponentLifecycle extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: "prek"
    }
  }
  updateProp = () => {
    this.setState({
      name: "preks"
    })
  }
  render() {
    return (
      <>
        <Child name={this.state.name}></Child>
        <button onClick={this.updateProp}>Update prop</button>
      </>

    )
  }
}

class Child extends ComponentLifecycle {
  constructor(props) {
    console.log("Constructor", props);
    super(props);
    this.state = { name: this.props.name }; //not allowed
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) { // return null, or state object
    console.log("getDerivedStateFromProps", props, state);
    if (props.name !== state.name)
      return { name: props.name }; // Only update state if the prop has changed
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    let result = this.state.name === nextState.name && this.props.name === nextProps.name;
    console.log("shouldComponentUpdate", !result);
    return !result;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate",
      prevProps,
      prevState
    );
    return {prevProps, prevState};
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    setTimeout(()=> {console.log(1)}, 5000);
    console.log("componentWillUnmount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }

  handleNameChange = () => {
    this.setState({
      name: this.state.name + " hirani"
    });
  };

  render() { 
    console.log("rendering")
    return (
      <>
        <br /> <br />
        <h3>Child component</h3>
        <p>Hello, {this.state.name}</p>
        <button onClick={this.handleNameChange}>Click</button>
      </>
    )
  }
}

export default ComponentLifecycle

/*
constuctor: Initialize local state and bind event handlers method,
Avoid introducing any side effects or subscription(use componentDidMount)

getDerivedStateFromProps: This method allows the component to update its state based on changes in props. //////////////////////// initial mount and on subsequent updates

shouldComponentUpdate: Compares the prev with new value to tell component when to render() or not. //////////////// subsequent updates

render() will not be invoked if shouldComponentUpdate() returns false.

componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. //diff with constructor

The componentDidUpdate() method is part of React’s Class Component Lifecycle. It is invoked immediately after a component’s updates are flushed to the DOM. This method is commonly used to perform side effects that depend on the new state or props, such as

componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()

*/


/*
Mounting -
1. constuctor
2. getDerivedStateFromProps 
3. render
4. componentDidMount()

Updating - 
1. getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

Unmounting - 
1. componentWillUnmount
*/