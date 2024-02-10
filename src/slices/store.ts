import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import articlesReducer from './postsSlice';
import modalReducer from './modalSlice';
import commentsReducer from './commentsSlice';

const rootReducer = combineReducers({
  articles: articlesReducer,
  modal: modalReducer,
  comments: commentsReducer,
  // Другие редюсеры
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
