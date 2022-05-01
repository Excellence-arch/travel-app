import React, { useRef, useEffect, useState } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import marker from "../assets/mapbox-icon.png";

const MapDetails = () => {
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((res) => {
      // console.log(res);
      setLon(res.coords.latitude);
      setLat(res.coords.longitude);
    });
    // console.log(lon, lat);
  }, [lat]);
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_PUBLIC_KEY,
  });
  const styleUrl = "mapbox://styles/mapbox/streets-v9";
  return (
    <>
      <Map
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
      </Map>
      ;
    </>
  );
};

export default MapDetails;
