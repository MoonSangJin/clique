import { call, put, takeEvery } from 'redux-saga/effects';
import {
  changeCoverBookmarkFolderRequest,
  createBookmarkRequest,
  deleteBookmarkFolderFailure,
  deleteBookmarkFolderRequest,
  deleteBookmarkRequest,
  fetchBookmarkFailure,
  fetchBookmarkFolderFailure,
  fetchBookmarkFolderRequest,
  fetchBookmarkFolderSuccess,
  fetchBookmarkRequest,
  fetchBookmarkSuccess,
  renameBookmarkFolderFailure,
  renameBookmarkFolderRequest,
  renameBookmarkRequest,
  updateIsFavoriteBookmarkFolderRequest,
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

    chrome.storage.sync.set({ bookmarkFolderList: res.data });

    yield put(fetchBookmarkFolderSuccess({ bookmarkFolderList: res.data }));
  } catch (e) {
    yield put(fetchBookmarkFolderFailure());
  }
}

const changeCoverBookmarkFolderApi = (token, folderId, coverUrl) =>
  request({
    url: `bookmark-folder/${folderId}`,
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}` },
    data: { coverImageUrl: coverUrl },
  });

function* changeCoverBookmarkFolderAsync({ payload }) {
  try {
    const folderId = payload.folderId;
    const coverUrl = payload.coverUrl;
    const token = yield call(getAccessToken);
    yield call(changeCoverBookmarkFolderApi, token, folderId, coverUrl);
    yield put(fetchBookmarkFolderRequest());
  } catch (e) {
    yield put(renameBookmarkFolderFailure());
  }
}

const renameBookmarkFolderApi = (token, folderId, name) =>
  request({
    url: `bookmark-folder/${folderId}`,
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}` },
    data: { name: name },
  });

function* renameBookmarkFolderAsync({ payload }) {
  try {
    const folderId = payload.folderId;
    const name = payload.name;
    const token = yield call(getAccessToken);
    yield call(renameBookmarkFolderApi, token, folderId, name);
    yield put(fetchBookmarkFolderRequest());
  } catch (e) {
    yield put(renameBookmarkFolderFailure());
  }
}

const updateIsFavoriteBookmarkFolderApi = (token, folderId, isFavorite) =>
  request({
    url: `bookmark-folder/${folderId}`,
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}` },
    data: { isFavorite: isFavorite },
  });

function* updateIsFavoriteBookmarkFolderAsync({ payload }) {
  try {
    const folderId = payload.folderId;
    const isFavorite = payload.isFavorite;
    const token = yield call(getAccessToken);
    yield call(updateIsFavoriteBookmarkFolderApi, token, folderId, isFavorite);
    yield put(fetchBookmarkFolderRequest());
  } catch (e) {
    yield put(renameBookmarkFolderFailure());
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
    yield put(fetchBookmarkFolderRequest());
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

    chrome.storage.sync.set({ bookmarkList: res.data });

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
  } catch (e) {}
}

const renameBookmarkApi = async (token, bookmarkId, data) =>
  request({
    url: `/bookmark/${bookmarkId}`,
    method: 'PATCH',
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  });

function* renameBookmarkAsync({ payload }) {
  try {
    const token = yield call(getAccessToken);
    yield call(renameBookmarkApi, token, payload.bookmarkId, {
      title: payload.title,
    });

    yield put(fetchBookmarkRequest());
  } catch (e) {}
}

const deleteBookmarkApi = async (token, bookmarkId) =>
  request({
    url: `/bookmark/${bookmarkId}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

function* deleteBookmarkAsync({ payload }) {
  try {
    const token = yield call(getAccessToken);
    yield call(deleteBookmarkApi, token, payload.bookmarkId);

    yield put(fetchBookmarkRequest());
  } catch (e) {}
}

export function* watchBookmark() {
  yield takeEvery(fetchBookmarkFolderRequest, fetchBookmarkFolderAsync);
  yield takeEvery(
    changeCoverBookmarkFolderRequest,
    changeCoverBookmarkFolderAsync
  );
  yield takeEvery(renameBookmarkFolderRequest, renameBookmarkFolderAsync);
  yield takeEvery(
    updateIsFavoriteBookmarkFolderRequest,
    updateIsFavoriteBookmarkFolderAsync
  );
  yield takeEvery(deleteBookmarkFolderRequest, deleteBookmarkFolderAsync);
  yield takeEvery(fetchBookmarkRequest, fetchBookmarkAsync);
  yield takeEvery(createBookmarkRequest, createBookmarkAsync);
  yield takeEvery(renameBookmarkRequest, renameBookmarkAsync);
  yield takeEvery(deleteBookmarkRequest, deleteBookmarkAsync);
}
