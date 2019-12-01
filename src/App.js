import React, { Component } from "react";
import TimeMonitor from "./component/timeMonitor/timeMonitor";
import ControlArea from "./component/ControlArea/ControlArea";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milisec: 0,
      isLive: false,
      history: []
    };
  }
  utilFunction() {
    const isLive = this.state.isLive;
    if (isLive) {
      const copyHistory = this.state.history;
      copyHistory.push(this.state.milisec);
      this.setState({ history: copyHistory });
    } else {
      this.setState({ milisec: 0 });
    }
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
    return (
      <div className="App">
        <TimeMonitor time={this.state.milisec} />
        <ControlArea
          toggleStart={this.toggleStart.bind(this)}
          utilFunction={this.utilFunction.bind(this)}
          appStatus={this.state.isLive}
        />
      </div>
    );
  }
}
