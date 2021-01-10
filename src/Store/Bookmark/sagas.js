import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { HOST } from '../../Constants/requests';
import {
  fetchBookmarkFailure,
  fetchBookmarkSuccess,
  fetchBookmarkRequest,
} from './actions';

const fetchBookmarkAsyncApi = (payload) => axios.get(HOST + '/token/', payload);

function* fetchBookmarkAsync({ payload }) {
  try {
    const res = yield call(fetchBookmarkAsyncApi, payload);

    const mockBookmark = {
      bookmarkFolder: [{ folder_title: '' }],
      bookmark: [{ title: '', url: '', favIconUrl: '' }],
    };

    // chrome.storage.sync.set({ access: res.data.access });
    yield put(fetchBookmarkSuccess());
    // yield put(setBookmarkinfo(mockUser));
  } catch (e) {
    yield put(fetchBookmarkFailure());
  }
}

export function* watchUser() {
  yield takeEvery(fetchBookmarkRequest, fetchBookmarkAsync);
}
