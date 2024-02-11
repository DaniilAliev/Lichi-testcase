import { Resolver, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { actions as articlesArctions, selectors } from '@/slices/postsSlice.ts';
import { DataFormType } from '@/types/types.ts';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useAppSelector from '@/hooks/index.ts';
import TextArea from './TextArea.tsx';
import Input from './Input.tsx';
import Button from './Button.tsx';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required'),
});

const AddPostForm = () => {
  const articlesLength = useAppSelector(selectors.selectAll).length;

  const [value, setValue] = useState<string | null>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataFormType>({
    defaultValues: {},
    resolver: yupResolver(schema) as Resolver<DataFormType>,
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
      <form onSubmit={handleSubmit(submit)}>
        <Input field={register('title')} />
        {errors.title && <p className="py-3 text-red-500">{errors.title.message}</p>}

        <TextArea type={'post'} field={register('body')} value={value} setValue={setValue} />
        {errors.body && <p className="pt-3 text-red-500">{errors.body.message}</p>}

        <Button type={'post'} />
      </form>
    </div>
  );
};

export default AddPostForm;
