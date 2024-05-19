import { combineReducers } from "redux";
import User from "../users/UserReducer";
import Employee from "../employee/EmployeeReducer";
import Toaster from "../Toaster/ToasterReducer";

export default combineReducers({
  Toaster,
  User,
  Employee,
});
