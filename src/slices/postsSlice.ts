import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from './store.ts';

export const articlesAdapter = createEntityAdapter();

const initialState = articlesAdapter.getInitialState();

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: articlesAdapter.setAll,
  },
});

export const { actions } = articlesSlice;
export const selectors = articlesAdapter.getSelectors((state: RootState) => state.articles);
export default articlesSlice.reducer;
