import { DataFormType } from '@/types/types.ts';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as commentsActions } from '@/slices/commentsSlice.ts';
import { actions as editActions, selectors as editSelectors } from '@/slices/editSlice.ts';
import { selectors as modalSelectors } from '@/slices/modalSlice.ts';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from './TextArea.tsx';
import Button from './Button.tsx';

const schema = yup.object().shape({
  body: yup.string().required('Leave a comment!'),
});

const CommentForm = () => {
  const { postId } = useSelector(modalSelectors);
  const { id, isEdit, body } = useSelector(editSelectors);

  const [value, setValue] = useState<string | null>(isEdit ? body : '');

  const dispatch = useDispatch();

  const {
    register, handleSubmit, formState: { errors }, setError,
  } = useForm<DataFormType>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const submit = (data: DataFormType): void => {
    if (!value) {
      setError('body', {
        type: 'required',
        message: 'Leave a comment!',
      });
      return;
    }

    if (isEdit) {
      const dataToDispatch = {
        id, body: data.body,
      };
      dispatch(editActions.endEdit(dataToDispatch));
    } else {
      const restoredData = { ...data, id: _.uniqueId(), postId };
      dispatch(commentsActions.addComment(restoredData));
    }
    setValue('');
  };

  return (
    <div className="pt-4 border-t-2">
      <form action="" onSubmit={handleSubmit(submit)}>
        <TextArea type={'comment'} field={register('body')} value={value} setValue={setValue} />
        {errors.body && <p className='text-red-500'>{errors.body.message}</p>}
        <div className="flex justify-between">
          <Button type={'submit'} />
          <Button type={'close'} />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
