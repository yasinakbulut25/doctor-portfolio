import { call, put, takeEvery } from 'redux-saga/effects';
import * as endpoints from '@/api/endpoints';
import * as ACTION_TYPES from '@/store/actionTypes';

function* fetchQuestionsSaga() {
  try {
    const response = yield call(endpoints.getQuestions);
    if (response.error) throw new Error(response.error);
    yield put({ type: ACTION_TYPES.FETCH_QUESTIONS.SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: ACTION_TYPES.FETCH_QUESTIONS.ERROR, payload: error.message });
  }
}

export default function* blogSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_QUESTIONS.REQUEST, fetchQuestionsSaga);
}
