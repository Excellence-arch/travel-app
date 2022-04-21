import { combineReducers } from "redux";
import mode from "./mode";
import users from "./users";
import cities from "./cities";

const allReducers = combineReducers({
  modeReducer: mode,
  usersReducer: users,
  citiesReducer: cities,
});

export default allReducers;
