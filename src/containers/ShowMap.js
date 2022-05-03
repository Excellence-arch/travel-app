import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import marker from "../assets/mapbox-icon.png";

const ShowMap = () => {
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((res) => {
      // console.log(res);
      setLon(res.coords.latitude);
      setLat(res.coords.longitude);
    });
    // console.log(lon, lat);
  }, [lat]);
  // const Map = ReactMapboxGl({
  //   accessToken: process.env.REACT_APP_MAPBOX_PUBLIC_KEY,
  // });
  const styleUrl = "mapbox://styles/mapbox/streets-v9";

  let map = useRef(null);
  const mapContainer = useRef(null);
  let direction = useRef(null);

  useEffect(() => {
    map = new mapboxgl.Map({
      accessToken: process.env.REACT_APP_MAPBOX_PUBLIC_KEY,
      container: mapContainer.current,
      style: styleUrl,
      center: [9.082, 8.6753],
      zoom: [5.5],
    });
  }, []);

  useEffect(() => {
    direction = new MapboxDirections({
      accessToken: process.env.REACT_APP_MAPBOX_PUBLIC_KEY,
      unit: "metric",
      profile: "mapbox/driving-traffic",
      alternatives: true,
    });
    map.addControl(direction, "top-left");
    console.log(direction);
  }, [start, destination]);

  useEffect(() => {
    axios
      .get(
        "https://api.mapbox.com/directions/v5/mapbox/driving-traffic/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoiZXhjZWxsZW5jZS1hcmNoIiwiYSI6ImNsMmZ5YnF4djBhNHUzY3BjYzN5OWR1dzQifQ.TVUj0aN0Botq-K152NWWsQ",
      )
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div ref={mapContainer} style={{ height: "100vh", width: "100vw" }} />
      {/* <Map
        style={styleUrl}
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
        center={[9.082, 8.6753]}
        zoom={[5.5]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[9.082, 8.6753]} />
        </Layer>
        <Marker coordinates={[lon, lat]} anchor="bottom">
          {" "}
          <img src={marker} style={{ width: "50px" }} alt="marker" />{" "}
        </Marker>
      </Map> */}
    </div>
  );
};

export default ShowMap;
