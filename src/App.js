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

function convertToTime(time) {
  const limit = 60;
  let milisec = time % 100,
    second = Math.floor((time / 100) % limit),
    minute = Math.floor((time / 100 / limit) % limit),
    hour = Math.floor(time / 100 / limit / limit);
  if (!hour) return `${minute}: ${second}. ${milisec}`;
  return `${hour}: ${minute}: ${second}. ${milisec}`;
}
