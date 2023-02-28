import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

function forecast5Days(data) {
  const dataDivided = [];
  for (let i = 0; i < data.length; i += 8)
    dataDivided.push(data.slice(i, i + 8));
  return dataDivided;
}

const getGeoLocation = async (term) => {
  try {
    const city = term || "London";
    // console.log(city);
    const location = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${4}&appid=5a425483989279205af45f041220b096`
    );
    // console.log(location.data);
    return location.data;
  } catch (err) {
    console.log(err);
  }
};

async function getCurrentWeather(lat, lon) {
  try {
    const weatherDataCurrent = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5a425483989279205af45f041220b096&units=metric`
    );
    return weatherDataCurrent.data;
  } catch (err) {
    console.log(err);
  }
}
async function getForecastWeather(lat, lon) {
  try {
    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5a425483989279205af45f041220b096&units=metric`
    );
    // console.log(forecast.data.list);
    return forecast5Days(forecast.data.list);
  } catch (err) {
    console.log(err);
  }
}

async function getWeatherDailyDetails(lat, lon) {
  try {
    const w_Data = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=933b027fbf544e101d81ff98c8c76826`
    );
    return w_Data.data.daily[0].pop;
  } catch (e) {
    return 0;
  }
}
async function getWeatherHourly(lat, lon) {
  // open-metoe public api
  try {
    const w_Data = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=UTC&hourly=temperature_2m,relativehumidity_2m,precipitation&daily=uv_index_max`
    );
    // console.log(w_Data.data);
    return w_Data.data;
  } catch (e) {
    //
    console.log(e);
  }
}

const getWeatherData = createAsyncThunk(
  "getWeatherData/current",
  async (term) => {
    const locations = await getGeoLocation(term);
    const lat = locations[0].lat;
    const lon = locations[0].lon;
    // const center2 = JSON.parse(localStorage.getItem("center"));
    // console.log(center2);
    const name = locations[0].name;
    const center = { lat, lon, name };
    localStorage.setItem("center", JSON.stringify({ ...center }));
    const weatherDataCurrent = await getCurrentWeather(lat, lon);
    const weatherForecastData = await getForecastWeather(lat, lon);
    const precipitation = await getWeatherDailyDetails(lat, lon);
    const weatherHourlyData = await getWeatherHourly(lat, lon);

    // console.log(weatherDataCurrent, weatherForecastData);
    return {
      weatherDataCurrent,
      weatherForecastData,
      name,
      precipitation,
      weatherHourlyData,
    };
  }
);

export { getWeatherData };
