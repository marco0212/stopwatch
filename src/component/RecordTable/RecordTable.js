import React from "react";
import { convertToTime } from "../../function";

export default class RecordTable extends React.Component {
  render() {
    return (
      <div className="table-area">
        <ul>
          {this.props.record.map((time, i) => {
            const key = `랩 ${i + 1}`;
            return (
              <li key={key}>
                <strong>{key}</strong>
                <time>{convertToTime(time)}</time>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
