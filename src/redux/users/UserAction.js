import * as types from "./UserType";

export const userLoginReqEmail = (values, successCallback) => {
  console.log("We are in user action req", values);
  return {
    type: types.STUDENT_LOGIN_EMAIL_REQ,
    payload: values,
    successCallback,
  };
};

export const userLoginRespEmail = (value) => {
  console.log("we are in user action resp", value);
  return {
    type: types.STUDENT_LOGIN_EMAIL_RESP,
    payload: value,
  };
};
