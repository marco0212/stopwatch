import React, { Component } from "react";
import TimeMonitor from "./component/timeMonitor/timeMonitor";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milisec: 0,
      isLive: false
    };
  }
  toggleStart() {
    const isLive = this.state.isLive;
    if (isLive) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        this.tick();
      }, 10);
    }
    this.setState({ isLive: !isLive });
  }
  tick() {
    this.setState({ milisec: this.state.milisec + 1 });
  }
  render() {
    return <TimeMonitor time={this.state.milisec} />;
  }
}
