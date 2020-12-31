import axios from 'axios';
import { dumbApiFailure, dumbApiRequest, dumbApiSuccess } from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';


const randomDogImageApiUrl = 'https://dog.ceo/api/breeds/image/random';

const fetchRandomDogImageApi = () => axios.get(randomDogImageApiUrl);

function* DumbApiAsync() {
  try {
    const res = yield call(fetchRandomDogImageApi);

    yield put(dumbApiSuccess(res.data.message));
  } catch (e) {
    yield put(dumbApiFailure());
  }
}


export function* watchUser() {
  yield takeEvery(dumbApiRequest, DumbApiAsync);
}