import React from "react";
import { convertToTime } from "../../function";

export default class RecordTable extends React.Component {
  render() {
    return (
      <div className="table-area">
        <ul>
          {this.props.record.map((data, i) => {
            if (!data) return <li key={i}></li>;
            const key = `랩 ${data.index}`;
            return (
              <li key={key}>
                <strong>{key}</strong>
                <time>{convertToTime(data.sec)}</time>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
