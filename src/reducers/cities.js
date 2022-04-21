const initState = {
  allCities: [],
  bookedCities: [],
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
    default:
      return {
        ...state,
      };
  }
};
export default cities;
