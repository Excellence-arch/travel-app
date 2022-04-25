import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";
import Map from "../components/Map";

const MapDetails = () => {
  const navigate = useNavigate();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });
  const moreInfo = () => {
    navigate("/travel-details");
  };

  if (!isLoaded) return <div>Loading... </div>;
  return (
    <>
      <Map />
      <Buttons name="Next" onClick={moreInfo} color="primary" />
    </>
  );
};

export default MapDetails;
