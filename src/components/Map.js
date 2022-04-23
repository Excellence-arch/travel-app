import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";
import LoginHome from "../pages/LoginHome";
import NavBar from "../layouts/NavBar";
import Places from "./Places";
import Distance from "./Distance";

const Map = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);
  // const [lat, setLat] = useState("");
  // const [lon, setLon] = useState("");

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((res) => {
  //     // console.log(res.coords.longitude);
  //     setLat(res.coords.latitude);
  //     setLon(res.coords.longitude);
  //     // console.log(res.coords.latitude);
  //   });
  // }, []);

  const mapWidth = {
    width: `100%`,
    height: `100vh`,
  };
  const center = useMemo(() => ({ lat: 8, lng: 4 }), []);
  // console.log(center);
  // const LatLngLiteral = google.maps.LatLngLiteral;
  // const DirectionsResult = google.maps.DirectionsResult;
  // const MapOptions = google.maps.MapOptions;
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className={darkMode ? "bg-navy w-25" : "w-25 bg-white"}>
            <h1>Commute?</h1>
          </div>
          <div className="w-75">
            <GoogleMap
              zoom={10}
              center={center}
              mapContainerClassName={mapWidth}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
