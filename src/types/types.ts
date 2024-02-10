export type Item = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export type RestoredItem = Omit<Item, 'userId'>;

export type TextAreaType = {
  type: 'post' | 'comment',
  field: any,
  value: string | null,
  setValue: (state: string) => void
}

export type ButtonType = {
  type: string
};

export type DataFormType = {
  title: string,
  body: string,
}

export type CommentFormType = Omit<DataFormType, 'title'>;
