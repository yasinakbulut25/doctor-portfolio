import { call, put, takeEvery } from 'redux-saga/effects';
import * as endpoints from '@/api/endpoints';
import * as ACTION_TYPES from '@/store/actionTypes';

function* fetchServicesSaga() {
  try {
    const response = yield call(endpoints.getServices);
    if (response.error) throw new Error(response.error);
    yield put({ type: ACTION_TYPES.FETCH_SERVICES.SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: ACTION_TYPES.FETCH_SERVICES.ERROR, payload: error.message });
  }
}

export default function* serviceSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_SERVICES.REQUEST, fetchServicesSaga);
}
