import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { actions as articlesArctions, selectors as articleSelectors } from '@/slices/postsSlice.ts';
import { DataFormType } from '@/types/types.ts';
import { useState } from 'react';
import TextArea from './TextArea.tsx';
import Input from './Input.tsx';
import Button from './Button.tsx';

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
