import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from './store.ts';

export const articlesAdapter = createEntityAdapter();

const initialState = articlesAdapter.getInitialState();

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: articlesAdapter.setAll,
    addArticle: (state, { payload }) => {
      const { id } = payload;
      return {
        ...state,
        ids: [id, ...state.ids],
        entities: {
          ...state.entities,
          [id]: payload,
        },
      };
    },
  },
});

export const { actions } = articlesSlice;
export const selectors = articlesAdapter.getSelectors((state: RootState) => state.articles);
export default articlesSlice.reducer;
