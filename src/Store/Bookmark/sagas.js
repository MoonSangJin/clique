import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchBookmarkFolderRequest,
  fetchBookmarkFolderSuccess,
  fetchBookmarkFolderFailure,
  fetchBookmarkRequest,
  fetchBookmarkSuccess,
  fetchBookmarkFailure,
  deleteBookmarkFolderRequest,
  deleteBookmarkFolderSuccess,
  deleteBookmarkFolderFailure, createBookmarkRequest,
} from './actions';
import { getAccessToken } from '../../Utils/tokenHandler';
import { request } from '../../Utils/request';

const fetchBookmarkFolderApi = (token) =>
  request({
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

const deleteBookmarkFolderApi = (token, folderId) =>
  request({
    url: `bookmark-folder/${folderId}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

function* deleteBookmarkFolderAsync({ payload }) {
  try {
    const folderId = payload.folderId;
    const token = yield call(getAccessToken);
    yield call(deleteBookmarkFolderApi, token, folderId);
    yield put(
      deleteBookmarkFolderSuccess({ deletedBookmarkFolderId: folderId })
    );
  } catch (e) {
    yield put(deleteBookmarkFolderFailure());
  }
}

const fetchBookmarkApi = (token) =>
  request({
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

const createBookmarkApi = (token, payload) =>
  request({
    url: '/bookmark',
    method: 'POST',
    data: payload,
    headers: { Authorization: `Bearer ${token}` },
  });

function* createBookmarkAsync({ payload }) {
  try {
    const token = yield call(getAccessToken);
    yield call(createBookmarkApi, token, payload);

    yield put(fetchBookmarkRequest());
  } catch (e) {
  }
}


export function* watchBookmark() {
  yield takeEvery(fetchBookmarkFolderRequest, fetchBookmarkFolderAsync);
  yield takeEvery(deleteBookmarkFolderRequest, deleteBookmarkFolderAsync);
  yield takeEvery(fetchBookmarkRequest, fetchBookmarkAsync);
  yield takeEvery(createBookmarkRequest, createBookmarkAsync);
}
