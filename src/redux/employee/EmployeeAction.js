import * as TYPES from "./EmployeeType";

export const fetchEmployees = () => {
  console.log('fetch Employee Action')
  return {
    type: TYPES.FETCH_EMPLOYEES_REQUEST,
  };
};

export const fetchEmployeesSuccess = (data) => ({
  type: TYPES.FETCH_EMPLOYEES_SUCCESS,
  payload: data,
});

export const fetchEmployeesFailure = (error) => ({
  type: TYPES.FETCH_EMPLOYEES_FAILURE,
  error,
});

export const createEmployee = (employee, successCallback) => ({
  type: TYPES.CREATE_EMPLOYEE_REQUEST,
  payload: employee,
  successCallback,
});

export const createEmployeeSuccess = (data) => ({
  type: TYPES.CREATE_EMPLOYEE_SUCCESS,
  payload: data,
});

export const createEmployeeFailure = (error) => ({
  type: TYPES.CREATE_EMPLOYEE_FAILURE,
  error,
});

export const updateEmployee = (employee, successCallback) => ({
  type: TYPES.UPDATE_EMPLOYEE_REQUEST,
  payload: employee,
  successCallback,
});

export const updateEmployeeSuccess = (data) => ({
  type: TYPES.UPDATE_EMPLOYEE_SUCCESS,
  payload: data,
});

export const updateEmployeeFailure = (error) => ({
  type: TYPES.UPDATE_EMPLOYEE_FAILURE,
  error,
});

export const deleteEmployee = (id, successCallback) => ({
  type: TYPES.DELETE_EMPLOYEE_REQUEST,
  payload: id,
  successCallback,
});

export const deleteEmployeeSuccess = (id) => ({
  type: TYPES.DELETE_EMPLOYEE_SUCCESS,
  payload: id,
});

export const deleteEmployeeFailure = (error) => ({
  type: TYPES.DELETE_EMPLOYEE_FAILURE,
  error,
});
