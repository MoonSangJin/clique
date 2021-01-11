import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { HOST } from '../../Constants/requests';
import {
  fetchBookmarkFailure,
  fetchBookmarkSuccess,
  fetchBookmarkRequest,
} from './actions';

const fetchBookmarkApi = (payload) => axios.get(HOST + '/token/', payload);

function* fetchBookmarkAsync({ payload }) {
  try {
    let token;
    chrome.storage.sync.get(['access'], function (result) {
      console.log('chrome storage에서 가져온 토큰' + result.access);
      token = result.access;
    });
    const res = yield call(fetchBookmarkApi(token), payload);
    console.log(res);

    yield put(fetchBookmarkSuccess(payload));
  } catch (e) {
    yield put(fetchBookmarkFailure());
  }
}

export function* watchUser() {
  yield takeEvery(fetchBookmarkRequest, fetchBookmarkAsync);
}
