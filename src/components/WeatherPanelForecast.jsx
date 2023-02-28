import { useState } from "react";
import {
  forecastDate,
  celToFarh,
 
} from "../helpers/dateAndUnitConversion";
import "./weatherPanelForecast.css";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Icon from "./Icon";

function WeatherPanelForecast({ forecastData, tempUnit }) {
  // console.log(forecastData);

  const [day, setDay] = useState(0);

  function slideOrder(data) {
    let prev;
    if (day === 0) {
      prev = data.length - 1;
    } else {
      prev = day - 1;
    }
    return prev;
  }

  function handleClickNext(data) {
    if (day === data.length - 1) setDay(0);
    else setDay(day + 1);
  }

  function handleClickPrev(data) {
    if (day === 0) setDay(data.length - 1);
    else setDay(day - 1);
  }

  return (
    <>
      {forecastData.length && (
        <section className="app--weatherForecastFiveDays">
          <div className="app--weatherForecastnDay">
            <button
              onClick={() => {
                handleClickPrev(forecastData);
              }}
              className="btn left"
            >
              <IoArrowBack className="arrow-icons" />
            </button>
            <button
              onClick={() => {
                handleClickNext(forecastData);
              }}
              className="btn right"
            >
              <IoArrowForward className="arrow-icons" />
            </button>
            {/* <ForecastItem id={1} /> */}
            {/* <ForecastItem forecast={forecastSlide(forecast)[0]} /> */}
            {forecastData.map((dayData, index) => {
              if (index === day)
                return (
                  <ForecastItem
                    forecast={dayData}
                    className="activeSlide"
                    tempUnit={tempUnit}
                    id={index + 1}
                    key={index + 1}
                  />
                );
              else if (index === slideOrder(forecastData))
                return (
                  <ForecastItem
                    forecast={dayData}
                    className="prevSlide"
                    tempUnit={tempUnit}
                    id={index + 1}
                    key={index + 1}
                  />
                );

              return (
                <ForecastItem
                  forecast={dayData}
                  className="nextSlide"
                  tempUnit={tempUnit}
                  id={index + 1}
                  key={index + 1}
                />
              );
            })}
            ;
          </div>
        </section>
      )}
    </>
  );
}

function ForecastItem({ forecast, id, className, tempUnit }) {
  return (
    <div className={`item ${className}`}>
      {/* date of forecast */}
      <p className="forecast-date">{forecastDate(forecast[0].dt_txt)}</p>
      {forecast.map((it) => {
        // time of temp
        const time = it.dt_txt.split(" ")[1].slice(0, 5);

        return (
          <div key={it.dt_txt} className="app--small-cards">
            <h5>{time}</h5>
            <div>
              {/* <ion-icon name="sunny-outline"></ion-icon> */}
              <Icon
                time={it.dt_txt.split(" ")[1].slice(0, 2)}
                code={it.weather[0].id}
                className="FW-icons"
              />
            </div>
            <p>
              {celToFarh(it.main.temp, tempUnit)} &deg;
              {tempUnit[0].toUpperCase()}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default WeatherPanelForecast;
