import { all, fork } from 'redux-saga/effects';
import { watchUser } from './user/sagas';
import { watchSignUp } from './SignUp/sagas';


export function* rootSaga() {
  yield all([
    fork(watchUser),
    fork(watchSignUp),
  ]);
}
