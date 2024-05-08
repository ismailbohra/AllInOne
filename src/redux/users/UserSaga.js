import * as ACTIONS from "./UserAction";
import * as TYPES from "./UserType";
import * as API from "./UserApis";
import * as MSG from "./UserMessages";
import Auth from "../../utils/Auth";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  dispatchToasterError,
  dispatchToasterSuccess,
} from "../../utils/Shared";

export function* userEmaliLogin(action) {
  console.log("student Saga", action);
  try {
    const response = yield call(API.loginUserEmail, action.payload);
    yield console.log("login student saga", response);
    yield call(Auth.signIn, response?.data || {});
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    dispatchToasterSuccess(MSG.loginSuccess);
    yield put(ACTIONS.userLoginRespEmail(response));
  } catch (err) {
    if (err?.response?.data?.message) {
      dispatchToasterError(err?.response?.data?.message);
    } else {
      dispatchToasterError(MSG.internalServerError);
    }
  }
}

export function* UserSagas() {
  yield all([takeLatest(TYPES.STUDENT_LOGIN_EMAIL_REQ, userEmaliLogin)]);
}
