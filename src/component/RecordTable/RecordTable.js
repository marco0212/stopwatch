import React from "react";
import { convertToTime } from "../../function";

export default class RecordTable extends React.Component {
  render() {
    const liveTimeRecordEle = (
      <li>
        <strong>랩 {this.props.record.length - 5}</strong>
        <time>{this.props.getTimeEle(this.props.time)}</time>
      </li>
    );
    return (
      <div className="table-area">
        <ul>
          {!!this.props.time && liveTimeRecordEle}
          {this.props.record.map((data, i) => {
            if (!data) return <li key={i}></li>;
            const key = `랩 ${data.index}`;
            return (
              <li key={key}>
                <strong>{key}</strong>
                <time>{this.props.getTimeEle(data.sec)}</time>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
