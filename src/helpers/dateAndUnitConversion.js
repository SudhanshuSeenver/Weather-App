function dateStr(dt, timezone) {
  // console.log(dt, timezone);
  const d = new Date();
  // const localTime = d.getTime();
  // const localOffset = d.getTimezoneOffset() * 60000;
  // const utc = localTime + localOffset;
  // get current time subtract the timezone oFFset from it (which is difference between time UTC and your LOCAL TIME)
  // after Subtraction yu will get UTC time just Add the timezone GIven in api (convert into milliSeconds)
  // let city = d.getTime() + d.getTimezoneOffset() * 60000 + 1000 * timezone;
  // const dateTime = new Date(city);
  // above is for current time it will change as your time changes

  // another approch

  const dateTime = new Date(
    dt * 1000 + timezone * 1000 + d.getTimezoneOffset() * 60000
  );

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const time = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  let date = dateTime.toLocaleDateString("en-IN", options);

  // console.log(
  //   dateTime.toLocaleDateString("en-GB", options),
  //   dateTime.toLocaleDateString("en-IN", options),
  //   new Date(dt)
  // );
  // console.log(date);
  date = date.split(",");
  // console.log(date);

  const dateString = `${time} ${date[0]}, ${date[1].slice(1)} '${date[2].slice(
    3
  )}`;
  // console.log(dateString);
  return { dateString, time: time };
}

function forecastDate(dt) {
  const date = new Date(dt);
  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });
}

function celToFarh(temp, unit) {
  return Math.floor(unit === "celcius" ? temp : (temp * 9) / 5 + 32);
}

function capitalize(term, del = "-", joinBy = "") {
  return term
    .split(del)
    .map((cap) => cap[0].toUpperCase() + cap.slice(1))
    .join(joinBy);
}

export { dateStr, forecastDate, celToFarh, capitalize };
