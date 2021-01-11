import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { HOST } from '../../Constants/requests';
import {
  fetchBookmarkFailure,
  fetchBookmarkSuccess,
  fetchBookmarkRequest,
  fetchBookmarkFolderFailure,
  fetchBookmarkFolderSuccess,
  fetchBookmarkFolderRequest,
} from './actions';

let token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwMzUxNjA1LCJqdGkiOiIwNTY0YWEzMTg0NDk0YTc4YjM5OWI5MDk3ZDE4NzIxOSIsInVzZXJfaWQiOjR9.MpzzftmSVOOgLyZcKJowZGpwDbjdWSzOOVHgc2yH6vY';

const fetchBookmarkFolderApi = (token) => {
  axios.get(HOST + '/bookmark-folder', {
    headers: { Authorization: `Bearer ${token}` },
  });
  // axios.defaults.headers.common['Authorization'] = token;
};

const fetchBookmarkApi = (token) => {
  axios.get(HOST + '/bookmark-folder', {
    headers: { Authorization: `Bearer ${token}` },
  });
  // axios.defaults.headers.common['Authorization'] = token;
};

function* fetchBookmarkFolderAsync({ payload }) {
  try {
    chrome.storage.sync.get(['access'], function (result) {
      console.log('chrome storage에서 가져온 토큰' + result.access);
      token = result.access;
    });
    const res = yield call(fetchBookmarkFolderApi, token);

    console.log(res);

    yield put(fetchBookmarkFolderSuccess(payload));
  } catch (e) {
    yield put(fetchBookmarkFolderFailure());
  }
}

function* fetchBookmarkAsync({ payload }) {
  try {
    chrome.storage.sync.get(['access'], function (result) {
      console.log('chrome storage에서 가져온 토큰' + result.access);
      token = result.access;
    });
    const res = yield call(fetchBookmarkApi, token);

    console.log(res);

    yield put(fetchBookmarkSuccess(payload));
  } catch (e) {
    yield put(fetchBookmarkFailure());
  }
}

export function* watchBookmark() {
  yield takeEvery(fetchBookmarkFolderRequest, fetchBookmarkFolderAsync);
  yield takeEvery(fetchBookmarkRequest, fetchBookmarkAsync);
}
