import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

const ShowMap = () => {
  const styleUrl = "mapbox://styles/mapbox/streets-v9";
  let map = useRef(null);
  const mapContainer = useRef(null);
  const geocoders = useRef(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [steps, setSteps] = useState("");
  const [coords, setCoords] = useState("");
  let updateRoute;
  let getMatch;
  let removeRoute;

  const geocoder = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX_PUBLIC_KEY,
  });

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
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        line_string: true,
        trash: true,
      },
      styles: [
        {
          id: "gl-draw-line",
          type: "line",
          filter: [
            "all",
            ["==", "$type", "LineString"],
            ["!=", "mode", "static"],
          ],
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#3b9ddd",
            "line-dasharray": [0.2, 2],
            "line-width": 4,
            "line-opacity": 0.7,
          },
        },
        {
          id: "gl-draw-polygon-and-line-vertex-halo-active",
          type: "circle",
          filter: [
            "all",
            ["==", "meta", "vertex"],
            ["==", "$type", "Point"],
            ["!=", "mode", "static"],
          ],
          paint: {
            "circle-radius": 10,
            "circle-color": "#fff",
          },
        },
      ],
    });
    map.addControl(draw);

    map.on("draw.create", updateRoute);
    map.on("draw.update", updateRoute);
    map.on("draw.delete", removeRoute);

    updateRoute = () => {
      removeRoute();
      const data = draw.getAll();
      const lastFeature = data.features.length - 1;
      const coords = data.features[lastFeature].geometry.coordinates;
      const newCoords = coords.join(";");
      getMatch(newCoords);
    };

    getMatch = (e) => {
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${e}?geometries=geojson&steps=true&access_token=${process.env.REACT_APP_MAPBOX_PUBLIC_KEY}`;
      let dist;
      let dur;
      let ste;
      let coor;
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          dist = res.data.routes[0].distance * 0.001;
          dur = res.data.routes[0].duration / 60;
          ste = res.data.routes[0].legs[0].steps;
          coor = res.data.routes[0].geometry;
          setDistance(res.data.routes[0].distance * 0.001);
          setDuration(res.data.routes[0].duration / 60);
          setSteps(res.data.routes[0].legs[0].steps);
          setCoords(res.data.routes[0].geometry);
        })
        .catch((err) => {
          console.log(err);
        });

      addRoute(coor);
    };

    const addRoute = (coords) => {
      if (map.getSource("route")) {
        map.removeLayer("route");
        map.removeSource("route");
      } else {
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: coords,
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#1db7dd",
            "line-width": 5,
            "line-opacity": 0.8,
          },
        });
      }
    };

    removeRoute = () => {
      if (map.getSource("route")) {
        map.removeLayer("route");
        map.removeSource("route");
      }
    };
  }, []);
  useEffect(() => {
    map.on("load", () => {
      geocoder.on("result", (e) => {
        console.log(e.result.center);
      });
    });
  });
  // geocoders.onAdd(map);

  return (
    <div>
      <div ref={mapContainer} style={{ height: "100vh", width: "100vw" }} />
      <div className="geocoder">
        <div ref={geocoders} />
      </div>
      <div>
        <div />
      </div>
    </div>
  );
};

export default ShowMap;
