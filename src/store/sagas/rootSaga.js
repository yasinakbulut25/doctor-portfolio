import { all, takeLatest, put } from 'redux-saga/effects';
import * as ACTION_TYPES from '@/store/actionTypes';
import userSaga from './userSaga';
import sectionsSaga from './sectionsSaga';
import questionsSaga from './questionsSaga';
import blogsSaga from './blogsSaga';
import commentsSaga from './commentsSaga';
import servicesSaga from './servicesSaga';
import contactsSaga from './contactsSaga';

function* initializeAppSaga() {
  yield put({ type: ACTION_TYPES.FETCH_SECTIONS.REQUEST });
  yield put({ type: ACTION_TYPES.FETCH_USER_INFOS.REQUEST });
  yield put({ type: ACTION_TYPES.FETCH_BLOGS.REQUEST });
  yield put({ type: ACTION_TYPES.FETCH_QUESTIONS.REQUEST });
  yield put({ type: ACTION_TYPES.FETCH_COMMENTS.REQUEST });
  yield put({ type: ACTION_TYPES.FETCH_SERVICES.REQUEST });
  yield put({ type: ACTION_TYPES.FETCH_CONTACTS.REQUEST });
}

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPES.INITIALIZE_APP, initializeAppSaga);
  yield all([
    userSaga(),
    sectionsSaga(),
    questionsSaga(),
    blogsSaga(),
    commentsSaga(),
    servicesSaga(),
    contactsSaga()
  ]);
}
