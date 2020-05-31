import React, { Component } from "react";
import TimeMonitor from "./component/Monitor/Monitor";
import ControlArea from "./component/ControlArea/ControlArea";
import RecordTable from "./component/RecordTable/RecordTable";
import { convertToTime } from "./function";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milisec: 0,
      isLive: false,
      history: Array(6).fill(null)
    };
  }
  utilFunction() {
    const isLive = this.state.isLive;
    let index = this.state.history.length - 5;
    if (isLive) {
      const copyHistory = this.state.history.slice();
      copyHistory.unshift({ sec: this.state.milisec, index });
      this.setState({ history: copyHistory });
    } else {
      this.setState({ milisec: 0, history: Array(6).fill(null) });
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
  getTimeEle(time) {
    const arr = convertToTime(time).split("");
    return arr.map((x, i) => {
      if (!Number.isNaN(Number(x))) return <span key={i}>{x}</span>;
      return x;
    });
  }
  tick() {
    this.setState({ milisec: this.state.milisec + 1 });
  }
  render() {
    return (
      <div className="App">
        <TimeMonitor time={this.state.milisec} getTimeEle={this.getTimeEle} />
        <ControlArea
          toggleStart={this.toggleStart.bind(this)}
          utilFunction={this.utilFunction.bind(this)}
          appStatus={this.state.isLive}
          time={this.state.milisec}
        />
        <RecordTable
          record={this.state.history}
          getTimeEle={this.getTimeEle}
          time={this.state.milisec}
          appStatus={this.state.isLive}
        />
      </div>
    );
  }
}
