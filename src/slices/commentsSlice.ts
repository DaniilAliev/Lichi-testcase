import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from './store.ts';

export const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: commentsAdapter.addOne,
  },
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors((state: RootState) => state.comments);
export default commentsSlice.reducer;
