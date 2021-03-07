import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchUserRequest,
  removeUserInfo,
  setSignInErrorMessage,
  setUserInfo,
  signInRequest,
  signWithGoogleRequest,
} from './actions';
import { getAccessToken } from '../../Utils/tokenHandler';
import { request } from '../../Utils/request';
import { signUpSuccess } from '../SignUp/actions';


const signInApi = (payload) =>
  request({
    url: '/token/',
    method: 'POST',
    data: payload,
  });

function* signInAsync({ payload }) {
  try {
    const res = yield call(signInApi, payload);

    chrome.storage.sync.set({
      access: res.data.access,
      userId: res.data.user.id,
    });

    yield put(setUserInfo(res.data.user));
  } catch (e) {
    yield put(removeUserInfo());
    yield put(setSignInErrorMessage('Email or password is invalid'));
  }
}

const signWithGoogleApi = (payload) =>
  request({
    url: '/user/google',
    method: 'POST',
    data: payload,
  });

function* signWithGoogleAsync({ payload }) {
  try {
    const res = yield call(signWithGoogleApi, payload);

    chrome.storage.sync.set({
      access: res.data.access,
      userId: res.data.user.id,
    });

    yield put(signUpSuccess());
    yield put(setUserInfo(res.data.user));
  } catch (e) {
    yield put(removeUserInfo());
    yield put(setSignInErrorMessage('Google authentication is failed.'));
  }
}

const fetchUserApi = (token) =>
  request({
    url: '/user/my-profile',
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

function* fetchUserAsync() {
  try {
    const token = yield call(getAccessToken);
    const res = yield call(fetchUserApi, token);

    yield put(setUserInfo(res.data));
  } catch (e) {
    yield put(removeUserInfo());
  }
}

export function* watchUser() {
  yield takeEvery(signInRequest, signInAsync);
  yield takeEvery(signWithGoogleRequest, signWithGoogleAsync);
  yield takeEvery(fetchUserRequest, fetchUserAsync);
}
