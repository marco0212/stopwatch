import React from "react";
import { convertToTime } from "../../function";

export default class TimeMonitor extends React.Component {
  render() {
    return convertToTime(this.props.time);
  }
}
