import { FC, useEffect, useState } from 'react';
import { TextAreaType } from '@/types/types';
import { useSelector } from 'react-redux';
import { selectors as editSelectors } from '@/slices/editSlice';

const TextArea: FC<TextAreaType> = ({
  type, field, value, setValue,
}) => {
  const { body, isEdit } = useSelector(editSelectors);

  useEffect(() => {
    if (type === 'comment') {
      setValue(isEdit ? body : '');
    }
  }, [isEdit, body, type, setValue]);

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      type='post'
      {...field}
      className="border-2 rounded-2xl size-full p-2"
      name={field.name}
      rows={2}
      placeholder={type === 'post' ? 'Write a new post...' : 'Leave a new comment'}
      value={value}
      onChange={handleTextareaChange}
    />
  );
};

export default TextArea;
