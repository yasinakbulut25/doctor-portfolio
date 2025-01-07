import { call, put, takeEvery } from 'redux-saga/effects';
import * as endpoints from '@/api/endpoints';
import * as ACTION_TYPES from '@/store/actionTypes';

function* fetchUserInfosSaga(action) {
  try {
    const response = yield call(endpoints.getUser, action.payload);
    if (response.error) throw new Error(response.error);
    yield put({ type: ACTION_TYPES.FETCH_USER_INFOS.SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: ACTION_TYPES.FETCH_USER_INFOS.ERROR, payload: error.message });
  }
}

export default function* userSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_USER_INFOS.REQUEST, fetchUserInfosSaga);
}
