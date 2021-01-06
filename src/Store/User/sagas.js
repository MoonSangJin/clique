import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { HOST } from '../../Constants/requests';
import { setUserInfo, signInFailure, signInRequest } from './actions';


const signInAsyncApi = (payload) => axios.post(HOST + '/token/', payload);

function* signInAsync({ payload }) {
  try {
    const res = yield call(signInAsyncApi, payload);

    // Todo(maitracle): server에서 user 정보를 주면 user 정보를 세팅하게 수정한다.
    // server 에서 로그인 시 user 정보를 주고있지 않으므로 mock user를 임시로 세팅한다.
    const mockUser = {
      id: -1,
      email: '',
      profileImageUrl: '',
    };

    chrome.storage.sync.set({ access: res.data.access });

    yield put(setUserInfo(mockUser));
  } catch (e) {
    yield put(signInFailure());
  }
}

export function* watchUser() {
  yield takeEvery(signInRequest, signInAsync);
}
