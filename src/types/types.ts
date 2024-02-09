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
}

export type ButtonType = Omit<TextAreaType, 'field'>;
