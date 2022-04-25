import { useEffect, useRef, useState } from "react";
import sky from "../assets/sky.jpg";
import yellow_bus from "../assets/yellow_bus_1.png";
import building from "../assets/unnamed (1).png";
import road from "../assets/road.png";
import cars from "../assets/gree_car_2.png";
import car2 from "../assets/green_car_3.png";
import reverseCar1 from "../assets/reverse_car_1_1.png";
import reverseCar3 from "../assets/reverse_car_3.png";

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

  const lastLaneImgStyle = {
    width: `200px`,
    // height: `100px`,
    // right: `0%`,
    zIndex: `20`,
    bottom: `3%`,
    position: `absolute`,
  };

  const firstLaneImgStyle = {
    width: `200px`,
    // height: `100px`,
    position: `absolute`,
    bottom: `40%`,
  };

  const middleLaneImgStyle = {
    width: `200px`,
    // height: `100px`,
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
  const allSpeeds = ["moveBusSlow", "moveBusFast", "moveBusMedium"];

  const middleSpeed = ["moveCarSlow", "moveCarMedium", "moveCarFast"];

  const allCars = [yellow_bus, cars, car2];

  const middleCars = [reverseCar1, reverseCar3];

  const [firstLaneImg, setFirstLaneImg] = useState(
    allCars[Math.floor(Math.random() * allCars.length)],
  );
  const [middleLaneImg, setMiddleLaneImg] = useState(
    middleCars[Math.floor(Math.random() * middleCars.length)],
  );
  const [lastLaneImg, setLastLaneImg] = useState(
    allCars[Math.floor(Math.random() * allCars.length)],
  );
  const [firstLaneSpeed, setFirstLaneSpeed] = useState(
    allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
  );
  const [middleLaneSpeed, setMiddleLaneSpeed] = useState(
    middleSpeed[Math.floor(Math.random() * middleSpeed.length)],
  );
  const [lastLaneSpeed, setLastLaneSpeed] = useState(
    allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
  );

  const [firstLaneInterval, setFirstLaneInterval] = useState(null);
  const [middleLaneInterval, setMiddleLaneInterval] = useState(null);
  const [lastLaneInterval, setLastLaneInterval] = useState(null);

  useEffect(() => {
    if (firstLaneSpeed === "moveBusSlow") {
      clearInterval(firstLaneInterval);
      setFirstLaneInterval(() =>
        setInterval(() => {
          setFirstLaneImg(allCars[Math.floor(Math.random() * allCars.length)]);
          setFirstLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 20000),
      );
    } else if (firstLaneSpeed === "moveBusMedium") {
      clearInterval(firstLaneInterval);
      setFirstLaneInterval(
        setInterval(() => {
          setFirstLaneImg(allCars[Math.floor(Math.random() * allCars.length)]);
          setFirstLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 10000),
      );
    } else {
      clearInterval(firstLaneInterval);
      setFirstLaneInterval(
        setInterval(() => {
          setFirstLaneImg(allCars[Math.floor(Math.random() * allCars.length)]);
          setFirstLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 5000),
      );
    }
  }, [firstLaneSpeed]);

  useEffect(() => {
    if (middleLaneSpeed === "moveCarSlow") {
      clearInterval(middleLaneInterval);
      setMiddleLaneInterval(
        setInterval(() => {
          setMiddleLaneImg(
            middleCars[Math.floor(Math.random() * middleCars.length)],
          );
          setMiddleLaneSpeed(
            middleSpeed[Math.floor(Math.random() * middleSpeed.length)],
          );
        }, 20000),
      );
    } else if (middleLaneSpeed === "moveCarMedium") {
      clearInterval(middleLaneInterval);
      setMiddleLaneInterval(
        setInterval(() => {
          setMiddleLaneImg(
            middleCars[Math.floor(Math.random() * middleCars.length)],
          );
          setMiddleLaneSpeed(
            middleSpeed[Math.floor(Math.random() * middleSpeed.length)],
          );
        }, 10000),
      );
    } else {
      clearInterval(middleLaneInterval);
      setMiddleLaneInterval(
        setInterval(() => {
          setMiddleLaneImg(
            middleCars[Math.floor(Math.random() * middleCars.length)],
          );
          setMiddleLaneSpeed(
            middleSpeed[Math.floor(Math.random() * middleSpeed.length)],
          );
        }, 5000),
      );
    }
  }, [middleLaneSpeed]);

  useEffect(() => {
    if (lastLaneSpeed === "moveBusSlow") {
      clearInterval(lastLaneInterval);
      setLastLaneInterval(
        setInterval(() => {
          setLastLaneImg(allCars[Math.floor(Math.random() * allCars.length)]);
          setLastLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 20000),
      );
    } else if (lastLaneSpeed === "moveBusMedium") {
      clearInterval(lastLaneInterval);
      setLastLaneInterval(
        setInterval(() => {
          setLastLaneImg(allCars[Math.floor(Math.random() * allCars.length)]);
          setLastLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 10000),
      );
    } else {
      clearInterval(lastLaneInterval);
      setLastLaneInterval(
        setInterval(() => {
          setLastLaneImg(allCars[Math.floor(Math.random() * allCars.length)]);
          setLastLaneSpeed(
            allSpeeds[Math.floor(Math.random() * allSpeeds.length)],
          );
        }, 5000),
      );
    }
  }, [lastLaneSpeed]);

  const middleRef = useRef(null);

  return (
    <>
      <div style={surface}>
        <div style={buildings} className="roads" />
        <div style={roads} className="roads" />
        <div style={car}>
          <img
            src={firstLaneImg}
            alt="Middle Car"
            // ref={middleRef}
            style={firstLaneImgStyle}
            className={firstLaneSpeed}
          />
          <img
            src={middleLaneImg}
            alt="Middle Car"
            ref={middleRef}
            style={middleLaneImgStyle}
            className={middleLaneSpeed}
          />
          <img
            src={lastLaneImg}
            alt="Last Car"
            style={lastLaneImgStyle}
            className={lastLaneSpeed}
          />
        </div>
      </div>
      <div> &nbsp </div>
    </>
  );
};

export default Animation;
