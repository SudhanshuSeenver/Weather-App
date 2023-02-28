import WeatherPanel from "./components/WeatherPanel";
import "./app.css";
import bgImageDefault from "./images/thunderstorm.jpg";
import MenuTray from "./components/MenuTray";
import { Route, Routes } from "react-router-dom";
import CurrentWeatherHourly from "./components/CurrentWeatherHourly";
import LocationMap from "./components/LocationMap";
import Setting from "./components/Settings";
import { getWeatherData } from "./store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

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

  useEffect(() => {
    dispatch(getWeatherData());
  }, []);

  return (
    <div className="container">
      <img src={bgImageDefault} alt="background" className="background-image" />
      <div className="bgGradient"></div>
      <MenuTray />
      <div className="weather-container">
        <Routes>
          <Route path="/setting" element={<Setting />} />
          <Route path="/today_hourly" element={<CurrentWeatherHourly />} />
          <Route path="/map" element={<LocationMap />} />
          <Route path="/" element={<WeatherPanel />} />
        </Routes>
        {/* <WeatherPanel /> */}
      </div>
    </div>
  );
}

export default App;
