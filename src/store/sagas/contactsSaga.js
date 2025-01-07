import { call, put, takeEvery } from 'redux-saga/effects';
import * as endpoints from '@/api/endpoints';
import * as ACTION_TYPES from '@/store/actionTypes';

function* fetchContactsSaga() {
  try {
    const response = yield call(endpoints.getContacts);
    if (response.error) throw new Error(response.error);
    yield put({ type: ACTION_TYPES.FETCH_CONTACTS.SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: ACTION_TYPES.FETCH_CONTACTS.ERROR, payload: error.message });
  }
}

export default function* contactSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_CONTACTS.REQUEST, fetchContactsSaga);
}
