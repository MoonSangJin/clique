import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { signUpFailure, signUpRequest, signUpSuccess } from './actions';
import { HOST } from '../../Constants/requests';
import { setUserInfo } from '../User/actions';


const signUpAsyncApi = (payload) => axios.post(HOST + '/user', payload);

function* signUpAsync({ payload }) {
  try {
    const res = yield call(signUpAsyncApi, payload);

    chrome.storage.sync.set({ access: res.data.access });

    yield put(signUpSuccess());
    yield put(setUserInfo(res.data.user));
  } catch (e) {
    yield put(signUpFailure());
  }
}


export function* watchSignUp() {
  yield takeEvery(signUpRequest, signUpAsync);
}