import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from './store';

export const modalAdapter = createEntityAdapter();

type InitialState = {
  isOpen: boolean,
  title: string | null,
  body:string | null,
  postId: number | null,
}

const initialState: InitialState = {
  isOpen: false,
  title: null,
  body: null,
  postId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.title = payload.title;
      state.body = payload.body;
      state.postId = payload.postId;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = null;
      state.body = null;
      state.postId = null;
    },
  },
});

export const { actions } = modalSlice;
export const selectors = (state: RootState) => state.modal;
export default modalSlice.reducer;
