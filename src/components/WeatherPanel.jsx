import "./weatherPanel.css";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  celToFarh,
  dateStr,
  capitalize,
} from "../helpers/dateAndUnitConversion";
import WeatherPanelForecast from "./WeatherPanelForecast";
// import { useState } from "react";
import { changeTemp } from "../store";
import Icon from "./Icon";
// import MenuTray from "./MenuTray";

function WeatherPanel() {
  const state = useSelector((state) => state);
  const { currentData, forecastData, tempUnit } = state.weatherData;
  
  const dispatch = useDispatch();

  function handleToggle() {
    // console.log(tempUnit);
    dispatch(changeTemp());
  }

  function currentWeatherPanel(data) {
    // console.log(data, "data");
    const date = Object.keys(data).length
      ? dateStr(data.dt, data.timezone)
      : { dateString: 0, time: "00:00" };
    return (
      <>
        {Object.keys(data).length && (
          <section className="app-weather-current">
            <div className="app--current-temp">
              <p>{celToFarh(data.main.temp, tempUnit)}&deg;</p>
            </div>
            <div className="app--current-timeCity">
              <p className="app--current-city">{data.mainName}</p>
              <p className="app--current-time">{date.dateString}</p>
            </div>
            <div className="app--W-curr-desc">
              <div>
                {/* <ion-icon name="sunny-outline"></ion-icon> */}
                <Icon
                  time={date.time.slice(0, 2)}
                  code={data.weather[0].id}
                  className="w-Icons"
                />
              </div>
              <p className="app--curr-desc">
                {capitalize(data.weather[0].description, " ", " ")}
              </p>
            </div>
          </section>
        )}
      </>
    );
  }

  return (
    <div className="weather-app-panel">
      <section className="toggler-container">
        <div className="toggle">
          <p className="fahrenheit">&deg;F</p>
          <p className="celcius">&deg;C</p>
          <div
            onClick={handleToggle}
            className={`toggle-action ${tempUnit}`}
          ></div>
        </div>
      </section>
      {currentWeatherPanel(currentData)}
      <SearchBar />
      <WeatherPanelForecast forecastData={forecastData} tempUnit={tempUnit} />
    </div>
  );
}

export default WeatherPanel;
