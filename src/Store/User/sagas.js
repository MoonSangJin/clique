import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { HOST } from '../../Constants/requests';
import { removeUserInfo, setUserInfo, signInRequest } from './actions';


const signInAsyncApi = (payload) => axios.post(HOST + '/token/', payload);

function* signInAsync({ payload }) {
  try {
    const res = yield call(signInAsyncApi, payload);

    chrome.storage.sync.set({ access: res.data.access, userId: res.data.user.id });

    yield put(setUserInfo(res.data.user));
  } catch (e) {
    yield put(removeUserInfo());
  }
}

export function* watchUser() {
  yield takeEvery(signInRequest, signInAsync);
}
