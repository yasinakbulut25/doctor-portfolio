import { call, put, takeEvery } from 'redux-saga/effects';
import * as endpoints from '@/api/endpoints';
import * as ACTION_TYPES from '@/store/actionTypes';

function* fetchBlogsSaga() {
  try {
    const response = yield call(endpoints.getBlogs);
    if (response.error) throw new Error(response.error);
    yield put({ type: ACTION_TYPES.FETCH_BLOGS.SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: ACTION_TYPES.FETCH_BLOGS.ERROR, payload: error.message });
  }
}

export default function* blogSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_BLOGS.REQUEST, fetchBlogsSaga);
}
