import { configureStore, combineReducers } from '@reduxjs/toolkit';
import articlesReducer from './postsSlice.ts';
import modalReducer from './modalSlice.ts';
import commentsReducer from './commentsSlice.ts';
import editReducer from './editSlice.ts';

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

export type RootState = ReturnType<typeof store.getState>;
