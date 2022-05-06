let longitude;
let latitude;

const initState = {
  lon: longitude,
  lat: latitude,
  allCities: [],
  bookedCities: [],
  distance: "",
  cost: "",
};

const cities = (state = initState, action) => {
  switch (action.type) {
    case "BOOK":
      localStorage.bookedCities = JSON.stringify([
        ...state.bookedCities,
        action.payload,
      ]);
      return {
        ...state,
      };
    case "ADDAMOUNT":
      return {
        ...state,
        cost: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default cities;
