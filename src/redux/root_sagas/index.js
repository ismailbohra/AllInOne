import { all } from "redux-saga/effects";
import { UserSagas } from "../users/UserSaga";
import { EmployeeSagas } from "../employee/EmployeSaga";

export function* watchSagas() {
  yield all([
    ...UserSagas(),
    ...EmployeeSagas()
  ]);
}
