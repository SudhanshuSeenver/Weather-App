import "./currentWeatherHourly.css";
import { FaThermometerHalf, FaWind, FaCloudRain } from "react-icons/fa";
import { WiBarometer, WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { dateStr } from "../helpers/dateAndUnitConversion";
import ChartLine from "./ChartLine";

function CurrentWeatherHourly() {
  const { weatherData } = useSelector((state) => state);
  const { currentData, hourlyData } = weatherData;

  return (
    <>
      {Object.keys(currentData).length && Object.keys(hourlyData).length && (
        <div className="weather-current-hourly">
          <div className="weatherToday-details">
            <div className="WT-detailSec">
              <div className="WT-det-part">
                <div className="WT-det-part-itm">
                  <div className="PT-itm-desc">
                    <p>Feels Like</p>
                    <p className="des-val">
                      {currentData.main["feels_like"]} &deg;C
                    </p>
                  </div>
                  <FaThermometerHalf className="itm-icon" />
                </div>
                <div className="WT-det-part-itm">
                  <div className="PT-itm-desc">
                    <p>Wind</p>
                    <p className="des-val">{currentData.wind.speed} m/s</p>
                  </div>
                  <FaWind className="itm-icon" />
                </div>
              </div>
              <div className="WT-det-part">
                <div className="WT-det-part-itm">
                  <div className="PT-itm-desc">
                    <p>Humidity</p>
                    <p className="des-val">{currentData.main.humidity}%</p>
                  </div>
                  <WiHumidity className="itm-icon" />
                </div>
                <div className="WT-det-part-itm">
                  <div className="PT-itm-desc">
                    <p>Precipitation</p>
                    <p className="des-val">{currentData.precipitation} mm</p>
                  </div>
                  <FaCloudRain className="itm-icon" />
                </div>
              </div>
            </div>
            <div className="WT-detailSec">
              <div className="WT-det-part">
                <div className="WT-det-part-itm">
                  <div className="PT-itm-desc">
                    <p>Sunrise</p>
                    <p className="des-val">
                      {
                        dateStr(currentData.sys.sunrise, currentData.timezone)
                          .time
                      }
                    </p>
                  </div>
                  <BsSunriseFill className="itm-icon" />
                </div>
                <div className="WT-det-part-itm">
                  <div className="PT-itm-desc">
                    <p>Sunset</p>
                    <p className="des-val">
                      {
                        dateStr(currentData.sys.sunset, currentData.timezone)
                          .time
                      }
                    </p>
                  </div>
                  <BsSunsetFill className="itm-icon" />
                </div>
              </div>
              <div className="WT-det-part">
                <div className="WT-det-part-itm">
                  <div className="PT-itm-desc">
                    <p>Visibility</p>
                    <p className="des-val">
                      {currentData.visibility / 1000} Km
                    </p>
                  </div>
                  <MdVisibility className="itm-icon" />
                </div>
                <div className="WT-det-part-itm">
                  <div className="PT-itm-desc">
                    <p>Pressure</p>
                    <p className="des-val">{currentData.main.pressure} hPa</p>
                  </div>
                  <WiBarometer className="itm-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="todayHourly-details">
            <ChartLine hourlyData={hourlyData} />
          </div>
        </div>
      )}
    </>
  );
}

export default CurrentWeatherHourly;
