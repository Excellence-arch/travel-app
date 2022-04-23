import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map";

const MapDetails = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });
  if (!isLoaded) return <div>Loading... </div>;
  return <Map />;
};

export default MapDetails;
