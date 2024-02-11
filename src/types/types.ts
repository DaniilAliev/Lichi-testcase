import { EntityId } from '@reduxjs/toolkit';

export type Item = {
  userId: number,
  id: EntityId,
  title: string,
  body: string,
};

export type RestoredItem = Omit<Item, 'userId'>;

export type TextAreaType = {
  type: 'post' | 'comment',
  field: any,
  value: string | null,
  // eslint-disable-next-line no-unused-vars
  setValue: (state: string | null) => void
}

export type ButtonType = {
  type: 'post' | 'submit' | 'close';
};

export type DataFormType = {
  title?: string,
  body: string,
}

// export type CommentFormType = Omit<DataFormType, 'title'>;
