import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchBookmarkFailure,
  fetchBookmarkFolderFailure,
  fetchBookmarkFolderRequest,
  fetchBookmarkFolderSuccess,
  fetchBookmarkRequest,
  fetchBookmarkSuccess,
} from './actions';
import { getAccessToken } from '../../Utils/tokenHandler';
import { request } from '../../Utils/request';


const fetchBookmarkFolderApi = (token) => request({
  url: '/bookmark-folder',
  method: 'GET',
  headers: { Authorization: `Bearer ${token}` },
});

function* fetchBookmarkFolderAsync() {
  try {
    const token = yield call(getAccessToken);
    const res = yield call(fetchBookmarkFolderApi, token);

    yield put(fetchBookmarkFolderSuccess({ bookmarkFolderList: res.data }));
  } catch (e) {
    yield put(fetchBookmarkFolderFailure());
  }
}


const fetchBookmarkApi = (token) => request({
  url: '/bookmark',
  method: 'GET',
  headers: { Authorization: `Bearer ${token}` },
});

function* fetchBookmarkAsync() {
  try {
    const token = yield call(getAccessToken);
    const res = yield call(fetchBookmarkApi, token);

    yield put(fetchBookmarkSuccess({ bookmarkList: res.data }));
  } catch (e) {
    yield put(fetchBookmarkFailure());
  }
}

export function* watchBookmark() {
  yield takeEvery(fetchBookmarkFolderRequest, fetchBookmarkFolderAsync);
  yield takeEvery(fetchBookmarkRequest, fetchBookmarkAsync);
}
