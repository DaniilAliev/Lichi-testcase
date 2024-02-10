import { Controller, useForm } from 'react-hook-form';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { actions as articlesArctions } from '@/slices/postsSlice';
import { selectors as articleSelectors } from '@/slices/postsSlice';
import { DataFormType } from '@/types/types';
import { useState } from 'react';

const AddPostForm = () => {
  const articlesLength = useSelector(articleSelectors.selectAll).length;
  const [value, setValue] = useState<string | null>('');

  const {
    register, handleSubmit, reset,
  } = useForm<DataFormType>({
    defaultValues: {},
  });

  const dispatch = useDispatch();

  const submit = (data: DataFormType): void => {
    const restoredData = { ...data, id: articlesLength + 1 };
    dispatch(articlesArctions.addArticle(restoredData));
    reset();
    setValue('');
  };

  return (
    <div className="max-w-screen-lg h-10 size-full h-full rounded-2xl my-3 ">
      <form action="" onSubmit={handleSubmit(submit)}>
        <Input field={register('title')} />
        <TextArea type={'post'} field={register('body')} value={value} setValue={setValue} />
        <Button type={'post'} />
      </form>
    </div>
  );
};

export default AddPostForm;
