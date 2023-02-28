import "./locationMap.css";
import Map from "./Map";

function LocationMap() {
  return (
    <div className="map-container">
      {localStorage.getItem("center") && <Map />}
    </div>
  );
}

export default LocationMap;
