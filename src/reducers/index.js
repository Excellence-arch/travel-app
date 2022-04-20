import { combineReducers } from "redux";
import mode from "./mode";
import users from "./users";

const allReducers = combineReducers({
  modeReducer: mode,
  usersReducer: users,
});

export default allReducers;
