import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { actions as editActions } from './editSlice.ts';
import type { RootState } from './store.ts';

export const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: commentsAdapter.addOne,
    updateComment: commentsAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(editActions.endEdit, (state, { payload }) => {
      if (payload) {
        const { id, body } = payload;
        commentsAdapter.updateOne(state, { id, changes: { body } as any });
      }
    });
  },
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors((state: RootState) => state.comments);
export default commentsSlice.reducer;
