import WeatherPanel from "./components/WeatherPanel";
import "./app.css";
import bgImageDefault from "./images/thunderstorm.jpg";
import MenuTray from "./components/MenuTray";
import { Route, Routes } from "react-router-dom";
import CurrentWeatherHourly from "./components/CurrentWeatherHourly";
import LocationMap from "./components/LocationMap";
import Setting from "./components/Settings";
import { getWeatherData } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IoSunny, IoRainy, IoSnow } from "react-icons/io5";
import { FaWind } from "react-icons/fa";

// import { getBgImage } from "./store";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

function App() {
  // for random images from unsplash of weather
  // will use different images from local will be the best option
  // as images are not good looking
  //   const dispatch = useDispatch();
  //   const bgImage = useSelector((state) =>
  //     state.bgImage.length === 0 ? bgImageDefault : state.bgImage
  //   );
  //   console.log(bgImage);
  //   useEffect(() => {
  //     dispatch(getBgImage());
  //   }, []);

  const dispatch = useDispatch();
  const { loader, error } = useSelector((state) => state.weatherData);
  // const loader = true;
  useEffect(() => {
    dispatch(getWeatherData());
  }, []);
  // console.log(error);

  return (
    <div className="container">
      {error && (
        <div className="snackbar">
          <p>No City Found With This Name.</p>
        </div>
      )}
      <img src={bgImageDefault} alt="background" className="background-image" />
      <div className="bgGradient"></div>
      <MenuTray />
      <div className="weather-container">
        {loader ? (
          <div className="loader-cont">
            <div className="loader">
              <IoSunny className="loader-icons sun" />
              <FaWind className="loader-icons wind" />
              <IoRainy className="loader-icons rainy" />
              <IoSnow className="loader-icons snow" />
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/setting" element={<Setting />} />
            <Route path="/today_hourly" element={<CurrentWeatherHourly />} />
            <Route path="/map" element={<LocationMap />} />
            <Route path="/" element={<WeatherPanel />} />
          </Routes>
        )}
        {/* <WeatherPanel /> */}
      </div>
    </div>
  );
}

export default App;
