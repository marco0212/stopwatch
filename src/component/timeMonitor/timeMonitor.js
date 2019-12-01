import React from "react";
import { convertToTime } from "../../function";

export default class TimeMonitor extends React.Component {
  render() {
    return <div className="monitor">{convertToTime(this.props.time)}</div>;
  }
}
