import { useNavigate } from "react-router-dom";
import GuideImg from "../assets/edited_guide.png";

const Guide = () => {
  const navigate = useNavigate();
  const toMap = () => {
    navigate("/maps");
  };
  return (
    <div>
      <div className="guide w-100 h-100">
        <div className="text-white" style={{ zIndex: 100 }}>
          <button onClick={toMap} type="button" className="btn text-white">
            Close
          </button>
        </div>
        <div className="container p-4" style={{ zIndex: 100 }}>
          <img
            style={{ width: "99%", height: "90%" }}
            src={GuideImg}
            alt="Instructions"
          />
        </div>
        <div className="container">
          <p className="display-6 text-white">
            1. When you click on the button labelled 1 (one), you have the
            ability to click on two or more points on the map. The points you
            click on the map indicate where you want to travel to.
          </p>
          <p className="display-6 text-white">
            When you want to end the points, you can double click on the ending
            point or press the enter key on your keyboard.
          </p>
        </div>
        <div className="container">
          <p className="display-6 text-white">
            2. Clicking on the button labelled 2 on the map deletes all existing
            travel points on the map.
          </p>
          <p className="display-6 text-white">
            To Draw points on the map again, you have to click on the button
            labelled 1
          </p>
          <p className="display-6 text-white">
            When you are done with the location picking, you can just click on
            the next button at the left bottom part og the screen to book a
            vehicle and pay
          </p>
          <p className="display-6 text-white">
            Click in the close Button at the left upper part of the screen to
            close this instructions panel.
          </p>
          <p className="display-5 text-white">Thank you</p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
