import { call, put, takeEvery } from 'redux-saga/effects';
import * as endpoints from '@/api/endpoints';
import * as ACTION_TYPES from '@/store/actionTypes';

function* fetchSectionsSaga(action) {
  try {
    const response = yield call(endpoints.getSections, action.payload);
    if (response.error) throw new Error(response.error);
    yield put({ type: ACTION_TYPES.FETCH_SECTIONS.SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: ACTION_TYPES.FETCH_SECTIONS.ERROR, payload: error.message });
  }
}

export default function* sectionsSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_SECTIONS.REQUEST, fetchSectionsSaga);
}
