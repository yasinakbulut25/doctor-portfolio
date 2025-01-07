import { call, put, takeEvery } from 'redux-saga/effects';
import * as endpoints from '@/api/endpoints';
import * as ACTION_TYPES from '@/store/actionTypes';

function* fetchCommentsSaga() {
  try {
    const response = yield call(endpoints.getComments);
    if (response.error) throw new Error(response.error);
    yield put({ type: ACTION_TYPES.FETCH_COMMENTS.SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: ACTION_TYPES.FETCH_COMMENTS.ERROR, payload: error.message });
  }
}

export default function* commentsSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_COMMENTS.REQUEST, fetchCommentsSaga);
}
