import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { HOST } from '../../Constants/requests';
import { fetchUserRequest, removeUserInfo, setUserInfo, signInRequest } from './actions';
import { getAccessToken, removeAccessToken } from '../../Utils/tokenHandler';


const signInApi = (payload) => axios.post(HOST + '/token/', payload);

function* signInAsync({ payload }) {
  try {
    const res = yield call(signInApi, payload);

    chrome.storage.sync.set({ access: res.data.access, userId: res.data.user.id });

    yield put(setUserInfo(res.data.user));
  } catch (e) {
    yield put(removeUserInfo());
  }
}

const fetchUserApi = (token) => axios.get(HOST + '/user/my-profile', { headers: { Authorization: `Bearer ${token}` } });

function* fetchUserAsync() {
  try {
    const token = yield call(getAccessToken);
    const res = yield call(fetchUserApi, token);

    yield put(setUserInfo(res.data));
  } catch (e) {
    yield call(removeAccessToken);
    yield put(removeUserInfo());
  }
}

export function* watchUser() {
  yield takeEvery(signInRequest, signInAsync);
  yield takeEvery(fetchUserRequest, fetchUserAsync);
}
