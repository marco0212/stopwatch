function convertToTime(time) {
  const limit = 60;
  let milisec = time % 100,
    second = Math.floor((time / 100) % limit),
    minute = Math.floor((time / 100 / limit) % limit),
    hour = Math.floor(time / 100 / limit / limit);

  if (second < 10) second = "0" + second.toString();
  if (minute < 10) minute = "0" + minute.toString();
  if (milisec < 10) milisec = "0" + milisec.toString();

  if (!hour) return `${minute}:${second}.${milisec}`;
  return `${hour}:${minute}:${second}.${milisec}`;
}

export { convertToTime };
