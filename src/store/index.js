import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import userReducer from '@/store/reducers/user/userReducer';
import sectionsReducer from '@/store/reducers/sections/sectionsReducer';
import questionsReducer from './reducers/questions/questionsReducer';
import blogsReducer from './reducers/blogs/blogsReducer';
import commentsReducer from './reducers/comments/commentsReducer';
import servicesReducer from './reducers/services/servicesReducer';
import contactsReducer from './reducers/contacts/contactsReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    sections: sectionsReducer,
    questions: questionsReducer,
    blogs: blogsReducer,
    comments: commentsReducer,
    services: servicesReducer,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
