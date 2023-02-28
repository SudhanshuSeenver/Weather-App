function Map() {
  const center = JSON.parse(localStorage.getItem("center"));

  const googleMapAPI = "AIzaSyAq15HbfCRMW7RqNb5LUNyOLyfzpYI0wl4";

  return (
    <>
      {center && (
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${center.name}`}
        ></iframe>
      )}
    </>
  );
}

export default Map;
