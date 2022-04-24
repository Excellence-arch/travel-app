import { useEffect, useMemo, useRef, useState } from "react";
import sky from "../assets/sky.jpg";
import yellow_bus from "../assets/yellow_bus_1.png";
import building from "../assets/unnamed (1).png";
import road from "../assets/road.png";
import cars from "../assets/black_car.png";

const Animation = () => {
  const surface = {
    background: `url(${sky})`,
    width: `100%`,
    height: `70vh`,
    position: `relative`,
    overflow: `hidden`,
    backgroundSize: `cover`,
  };

  const buildings = {
    background: `url(${building})`,
    height: `200px`,
    width: `500%`,
    display: `block`,
    position: `absolute`,
    bottom: `40%`,
    left: `0%`,
    backgroundRepeat: `repeat-x`,
    // animation: `moving 6s linear infinite`,
  };

  const car = {
    width: `200px`,
    height: `100px`,
  };

  const carImg = {
    width: `200px`,
    height: `100px`,
    // right: `0%`,
    zIndex: `20`,
    bottom: `3%`,
    position: `absolute`,
  };

  const firstLaneImg = {
    width: `200px`,
    height: `100px`,
    position: `absolute`,
    bottom: `40%`,
  };

  const busImg = {
    width: `200px`,
    height: `100px`,
    zIndex: `20`,
    bottom: `24%`,
    position: `absolute`,
  };

  const roads = {
    background: `url(${road})`,
    height: `200px`,
    width: `500%`,
    display: `block`,
    position: `absolute`,
    bottom: `0%`,
    left: `0%`,
    backgroundRepeat: `repeat-x`,
  };
  const allSpeeds = [
    "moveCarSlow",
    "moveCarMedium",
    "moveCarFast",
    "moveBusSlow",
    "moveBusFast",
    "moveBusMedium",
  ];

  const allCars = [yellow_bus, cars];
  const [firstLanes, setFirstLanes] = useState(
    allCars[Math.floor(Math.random() * allCars.length)],
  );
  const [middleLanes, setMiddleLanes] = useState(
    allCars[Math.floor(Math.random() * allCars.length)],
  );
  const [lastLanes, setLastLanes] = useState(
    allCars[Math.floor(Math.random() * allCars.length)],
  );
  const [firstLaneSpeed, setFirstLaneSpeed] = useState(
    allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
  );
  const [middleLaneSpeed, setMiddleLaneSpeed] = useState(
    allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
  );
  const [lastLaneSpeed, setLastLaneSpeed] = useState(
    allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
  );

  const [firstLaneInterval, setFirstLaneInterval] = useState(null);
  const [middleLaneInterval, setMiddleLaneInterval] = useState(null);
  const [lastLaneInterval, setLastLaneInterval] = useState(null);

  useEffect(() => {
    if (
      firstLaneSpeed === "moveCarSlow" ||
      firstLaneSpeed === "moveCarMedium" ||
      firstLaneSpeed === "moveCarFast"
    ) {
      console.log("reverse");
    } else {
      console.log("Forward");
    }
    if (firstLaneSpeed === "moveCarSlow" || firstLaneSpeed === "moveBusSlow") {
      clearInterval(firstLaneInterval);
      setFirstLaneInterval(() =>
        setInterval(() => {
          setFirstLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setFirstLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 20000),
      );
    } else if (
      firstLaneSpeed === "moveCarMedium" ||
      firstLaneSpeed === "moveBusMedium"
    ) {
      clearInterval(firstLaneInterval);
      setFirstLaneInterval(
        setInterval(() => {
          setFirstLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setFirstLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 10000),
      );
    } else {
      clearInterval(firstLaneInterval);
      setFirstLaneInterval(
        setInterval(() => {
          setFirstLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setFirstLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 5000),
      );
    }
  }, [firstLaneSpeed]);

  useEffect(() => {
    if (
      middleLaneSpeed === "moveCarSlow" ||
      middleLaneSpeed === "moveCarMedium" ||
      middleLaneSpeed === "moveCarFast"
    ) {
      console.log("reverse");
    } else {
      console.log("Forward");
    }
    if (
      middleLaneSpeed === "moveCarSlow" ||
      middleLaneSpeed === "moveBusSlow"
    ) {
      clearInterval(middleLaneInterval);
      setMiddleLaneInterval(
        setInterval(() => {
          setMiddleLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setMiddleLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 20000),
      );
    } else if (
      middleLaneSpeed === "moveCarMedium" ||
      middleLaneSpeed === "moveBusMedium"
    ) {
      clearInterval(middleLaneInterval);
      setMiddleLaneInterval(
        setInterval(() => {
          setMiddleLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setMiddleLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 10000),
      );
    } else {
      clearInterval(middleLaneInterval);
      setMiddleLaneInterval(
        setInterval(() => {
          setMiddleLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setMiddleLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 5000),
      );
    }
  }, [middleLaneSpeed]);

  useEffect(() => {
    if (
      lastLaneSpeed === "moveCarSlow" ||
      lastLaneSpeed === "moveCarMedium" ||
      lastLaneSpeed === "moveCarFast"
    ) {
      console.log("reverse");
    } else {
      console.log("Forward");
    }
    if (lastLaneSpeed === "moveCarSlow" || lastLaneSpeed === "moveBusSlow") {
      clearInterval(lastLaneInterval);
      setLastLaneInterval(
        setInterval(() => {
          setLastLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setLastLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 20000),
      );
    } else if (
      lastLaneSpeed === "moveCarMedium" ||
      lastLaneSpeed === "moveBusMedium"
    ) {
      clearInterval(lastLaneInterval);
      setLastLaneInterval(
        setInterval(() => {
          setLastLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setLastLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 10000),
      );
    } else {
      clearInterval(lastLaneInterval);
      setLastLaneInterval(
        setInterval(() => {
          setLastLanes(allCars[Math.floor(Math.random() * allCars.length)]);
          setLastLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 5000),
      );
    }
  }, [lastLaneSpeed]);

  const changeLanes = () => {
    setFirstLanes(allCars[Math.floor(Math.random() * allCars.length)]);
    setMiddleLanes(allCars[Math.floor(Math.random() * allCars.length)]);
    setLastLanes(allCars[Math.floor(Math.random() * allCars.length)]);
    setFirstLaneSpeed(allSpeeds[Math.floor(Math.random() * allSpeeds.length)]);
    setMiddleLaneSpeed(allSpeeds[Math.floor(Math.random() * allSpeeds.length)]);
    setLastLaneSpeed(allSpeeds[Math.floor(Math.random() * allSpeeds.length)]);
  };

  const middleRef = useRef(null);

  return (
    <>
      <div style={surface}>
        <div style={buildings} className="roads" />
        <div style={roads} className="roads" />
        <div style={car}>
          <img
            src={firstLanes}
            alt="Middle Car"
            // ref={middleRef}
            style={firstLaneImg}
            className={firstLaneSpeed}
          />
          <img
            src={middleLanes}
            alt="Middle Car"
            ref={middleRef}
            style={busImg}
            className={middleLaneSpeed}
          />
          <img
            src={lastLanes}
            alt="Last Car"
            style={carImg}
            className={lastLaneSpeed}
          />
        </div>
      </div>
      <div> &nbsp </div>
    </>
  );
};

export default Animation;
