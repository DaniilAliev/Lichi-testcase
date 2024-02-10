import { Controller, useForm } from 'react-hook-form';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { actions as articlesArctions } from '@/slices/postsSlice';
import { selectors as articleSelectors } from '@/slices/postsSlice';

type DataForm = {
  title: string,
  body: string,
}

const AddPostForm = () => {
  const articlesLength = useSelector(articleSelectors.selectAll).length;

  const {
    register, handleSubmit, reset,
  } = useForm<DataForm>({
    defaultValues: {},
  });

  const dispatch = useDispatch();

  const submit = (data: DataForm): void => {
    const restoredData = { ...data, id: articlesLength + 1 };
    dispatch(articlesArctions.addArticle(restoredData));
    reset();
  };

  return (
    <div className="max-w-screen-lg h-10 size-full h-full rounded-2xl my-3 ">
      <form action="" onSubmit={handleSubmit(submit)}>
        <Input field={register('title')} />
        <TextArea type={'post'} field={register('body')} />
        <Button type={'post'} />
      </form>
    </div>
  );
};

export default AddPostForm;
