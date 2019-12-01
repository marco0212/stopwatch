import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milisec: 0
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 10);
  }
  tick() {
    this.setState({ milisec: this.state.milisec + 1 });
  }
  render() {
    return this.state.milisec;
  }
}
