import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from './store.ts';

export const editAdapter = createEntityAdapter();

type InitialState = {
  isEdit: boolean,
  id: number | null,
  body: string | null
}

const initialState: InitialState = {
  isEdit: false,
  id: null,
  body: null,
};

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    startEdit: (state, { payload }) => (
      {
        ...state, isEdit: true, id: payload.id, body: payload.body,
      }
    ),
    endEdit: (state, { payload }) => (
      {
        ...state, isEdit: payload.isEdit, id: null, body: null,
      }
    ),
  },
});

export const { actions } = editSlice;
export const selectors = (state: RootState) => state.edit;
export default editSlice.reducer;
