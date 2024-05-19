import { call, put, takeLatest, all } from "redux-saga/effects";
import * as ACTIONS from "./EmployeeAction";
import * as TYPES from "./EmployeeType";
import * as API from "./EmployeeApi";
import {
  dispatchToasterError,
  dispatchToasterSuccess,
} from "../../utils/Shared";

function* fetchEmployeesSaga() {
  try {
    console.log("calling employee saga");
    // const response = yield call(API.fetchEmployees);

    // yield put(ACTIONS.fetchEmployeesSuccess(response.data));

    const data = [
      {
        employeeId:"E0001",
        name:"Ismail bohra",
        email: "ismail@gmail.com",
        warehouse: "india",
        shop: "",
        designation: "employee",
        dateOfJoining: "24-05-2023",
        lastLogin: "today",
      },
    ];
    yield put(ACTIONS.fetchEmployeesSuccess(data));
    dispatchToasterSuccess("Fetched Successfully")
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || "Failed to fetch employees"
    );
    yield put(ACTIONS.fetchEmployeesFailure(err));
  }
}

function* createEmployeeSaga(action) {
  try {
    const response = yield call(API.createEmployee, action.payload);
    dispatchToasterSuccess("Employee created successfully");
    yield put(ACTIONS.createEmployeeSuccess(response.data));
    if (action.successCallback) {
      yield call(action.successCallback);
    }
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || "Failed to create employee"
    );
    yield put(ACTIONS.createEmployeeFailure(err));
  }
}

function* updateEmployeeSaga(action) {
  try {
    const response = yield call(API.updateEmployee, action.payload);
    dispatchToasterSuccess("Employee updated successfully");
    yield put(ACTIONS.updateEmployeeSuccess(response.data));
    if (action.successCallback) {
      yield call(action.successCallback);
    }
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || "Failed to update employee"
    );
    yield put(ACTIONS.updateEmployeeFailure(err));
  }
}

function* deleteEmployeeSaga(action) {
  try {
    yield call(API.deleteEmployee, action.payload);
    dispatchToasterSuccess("Employee deleted successfully");
    yield put(ACTIONS.deleteEmployeeSuccess(action.payload));
    if (action.successCallback) {
      yield call(action.successCallback);
    }
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || "Failed to delete employee"
    );
    yield put(ACTIONS.deleteEmployeeFailure(err));
  }
}

export function* EmployeeSagas() {
  yield all([
    takeLatest(TYPES.FETCH_EMPLOYEES_REQUEST, fetchEmployeesSaga),
    takeLatest(TYPES.CREATE_EMPLOYEE_REQUEST, createEmployeeSaga),
    takeLatest(TYPES.UPDATE_EMPLOYEE_REQUEST, updateEmployeeSaga),
    takeLatest(TYPES.DELETE_EMPLOYEE_REQUEST, deleteEmployeeSaga),
  ]);
}
