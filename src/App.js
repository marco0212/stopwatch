import React, { Component } from "react";
import TimeMonitor from "./component/TimeMonitor/TimeMonitor";
import ControlArea from "./component/ControlArea/ControlArea";
import RecordTable from "./component/RecordTable/RecordTable";
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
    let index = this.state.history.length + 1;
    if (isLive) {
      const copyHistory = this.state.history.slice();
      copyHistory.unshift({ sec: this.state.milisec, index });
      this.setState({ history: copyHistory });
    } else {
      this.setState({ milisec: 0, history: [] });
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
        <RecordTable record={this.state.history} />
      </div>
    );
  }
}
