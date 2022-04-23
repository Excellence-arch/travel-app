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
    bottom: `-1%`,
    position: `absolute`,
    left: `96%`,
  };

  const busImg = {
    width: `200px`,
    height: `100px`,
    zIndex: `20`,
    bottom: `24%`,
    position: `absolute`,
    left: `-10%`,
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

  const changeLanes = () => {
    setFirstLanes(allCars[Math.floor(Math.random() * allCars.length)]);
    setMiddleLanes(allCars[Math.floor(Math.random() * allCars.length)]);
    setLastLanes(allCars[Math.floor(Math.random() * allCars.length)]);
  };

  const [middleChange, setMiddleChange] = useState(false);
  const [lastChange, setLastChange] = useState(false);
  useEffect(() => {
    if (busImg.left === "1400px") {
      setMiddleChange(!middleChange);
    }
    if (carImg.left === "0px") {
      setLastChange(!lastChange);
    }
    console.log(busImg.margin);
  }, [busImg.left, carImg.left]);
  const busRef = useRef("");
  // const changeAllLanes = useMemo(
  //   () => changeLanes(),
  //   [middleChange, lastChange],
  // );
  return (
    <>
      <div style={surface}>
        <div style={buildings} className="roads" />
        <div style={roads} className="roads" />
        <div style={car}>
          <img
            src={middleLanes}
            alt="bus"
            ref={busRef}
            style={busImg}
            className="moveBus"
          />
          <img src={lastLanes} alt="car" style={carImg} className="moveCar" />
        </div>
      </div>
      <div> &nbsp </div>
    </>
  );
};

export default Animation;
