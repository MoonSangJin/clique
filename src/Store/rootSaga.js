import { all, fork } from 'redux-saga/effects';
import { watchUser } from './User/sagas';
import { watchSignUp } from './SignUp/sagas';
import { watchBookmark } from './Bookmark/sagas';

export function* rootSaga() {
  yield all([fork(watchUser), fork(watchSignUp), fork(watchBookmark)]);
}
