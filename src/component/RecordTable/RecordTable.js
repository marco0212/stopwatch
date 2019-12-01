import React from "react";

export default function RecordTable(props) {
  const liveTimeRecordEle = (
    <li>
      <strong>랩 {props.record.length - 5}</strong>
      <time>{props.getTimeEle(props.time)}</time>
    </li>
  );
  return (
    <div className="table-area">
      <ul>
        {!!props.time && liveTimeRecordEle}
        {props.record.map((data, i) => {
          if (!data) return <li key={i}></li>;
          const key = `랩 ${data.index}`;
          return (
            <li key={key}>
              <strong>{key}</strong>
              <time>{props.getTimeEle(data.sec)}</time>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
