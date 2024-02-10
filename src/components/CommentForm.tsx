import { CommentFormType } from '@/types/types';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as commentsActions } from '@/slices/commentsSlice';
import { actions as editActions } from '@/slices/editSlice';
import { selectors as modalSelectors } from '@/slices/modalSlice';
import { selectors as editSelectors } from '@/slices/editSlice';
import TextArea from './TextArea';
import Button from './Button';

const CommentForm = () => {
  const { postId } = useSelector(modalSelectors);
  const { id, isEdit, body } = useSelector(editSelectors);

  const [formError, setFormError] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(isEdit ? body : '');

  const dispatch = useDispatch();

  const {
    register, handleSubmit,
  } = useForm<CommentFormType>({
    defaultValues: {},
  });

  const submit = (data: CommentFormType): void => {
    if (value?.length === 0) {
      setFormError('Leave a comment!');
    } else {
      setFormError(null);
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
    }
  };

  return (
    <div className="pt-4 border-t-2">
      <form action="" onSubmit={handleSubmit(submit)}>
        <TextArea type={'comment'} field={register('body')} value={value} setValue={setValue} />
        <p className='text-red-500'>{formError}</p>
        <div className="flex justify-between">
          <Button type={'submit'} />
          <Button type={'close'} />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
