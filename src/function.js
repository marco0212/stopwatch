function convertToTime(time) {
  const limit = 60;
  let milisec = time % 100,
    second = Math.floor((time / 100) % limit),
    minute = Math.floor((time / 100 / limit) % limit),
    hour = Math.floor(time / 100 / limit / limit);
  if (!hour) return `${minute}: ${second}. ${milisec}`;
  return `${hour}: ${minute}: ${second}. ${milisec}`;
}

export { convertToTime };
