import { CommentFormType } from "@/types/types";
import Button from "./Button";
import { useForm } from "react-hook-form";
import TextArea from "./TextArea";
import _ from 'lodash';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as commentsActions } from "@/slices/commentsSlice";
import { selectors as modalSelectors } from '@/slices/modalSlice';

const CommentForm = () => {
  const { postId } = useSelector(modalSelectors);

  const [formError, setFormError] = useState<string | null>(null);

  const dispatch = useDispatch();

  const {
    register, handleSubmit, reset,
  } = useForm<CommentFormType>({
    defaultValues: {},
  });

  const submit = (data: CommentFormType): void => {
    if (data.body.length !== 0) {
      setFormError(null);
      const restoredData = { ...data, id: _.uniqueId(), postId };
      console.log(restoredData);
      dispatch(commentsActions.addComment(restoredData));
      reset();
    } else {
      setFormError('Leave a comment!');
    }
  };

  return (
    <div className="pt-4 border-t-2">
      <form action="" onSubmit={handleSubmit(submit)}>
        <TextArea type={'comment'} field={register('body')}/>
        <p>{formError}</p>
        <div className="flex justify-between">
          <Button type={'submit'} />
          <Button type={'close'} />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
