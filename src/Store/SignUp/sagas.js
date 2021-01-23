import { call, put, takeEvery } from 'redux-saga/effects';

import { signUpFailure, signUpRequest, signUpSuccess } from './actions';
import { setUserInfo } from '../User/actions';
import { request } from '../../Utils/request';


const signUpAsyncApi = (payload) => request({
  url: '/user',
  method: 'POST',
  data: payload,
});

function* signUpAsync({ payload }) {
  try {
    const res = yield call(signUpAsyncApi, payload);

    chrome.storage.sync.set({ access: res.data.access, userId: res.data.user.id });

    yield put(signUpSuccess());
    yield put(setUserInfo(res.data.user));
  } catch (e) {
    yield put(signUpFailure());
  }
}


export function* watchSignUp() {
  yield takeEvery(signUpRequest, signUpAsync);
}