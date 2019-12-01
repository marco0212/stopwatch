import React from "react";
import { convertToTime } from "../../function";

export default class TimeMonitor extends React.Component {
  render() {
    return (
      <div className="monitor">
        <time>{convertToTime(this.props.time)}</time>
      </div>
    );
  }
}
