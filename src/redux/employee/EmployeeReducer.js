import {
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
} from "./EmployeeType";

const initialState = {
  data: [
    {
      id: "",
      name: "ismail",
      email: "ism@gmail.com",
      warehouse: "",
      shop: "global",
      designation: "admin",
      dateOfJoining: "24-11-2002",
      lastLogin: "today",
    },
  ],
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_EMPLOYEES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_EMPLOYEES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default employeeReducer;
