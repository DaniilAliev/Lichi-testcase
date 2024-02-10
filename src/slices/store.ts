import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import articlesReducer from './postsSlice';
import modalReducer from './modalSlice';
import commentsReducer from './commentsSlice';
import editReducer from './editSlice';

const rootReducer = combineReducers({
  articles: articlesReducer,
  modal: modalReducer,
  comments: commentsReducer,
  edit: editReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
