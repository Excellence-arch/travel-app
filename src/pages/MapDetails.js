import { Link } from "react-router-dom";
import ShowMap from "../containers/ShowMap";
import NavBar from "../layouts/NavBar";

const MapDetails = () => {
  return (
    <>
      <NavBar />
      <ShowMap />
      <Link to="/travel-details" className="mx-4 btn btn-primary float-right">
        Next
      </Link>
    </>
  );
};

export default MapDetails;
