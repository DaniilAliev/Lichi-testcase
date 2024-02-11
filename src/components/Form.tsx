import { FC, ReactElement } from 'react';
import AddPostForm from './AddPostForm.tsx';
import CommentForm from './CommentForm.tsx';

interface FormMappingType {
  [key: string]: ReactElement;
}

const mapping: FormMappingType = {
  post: <AddPostForm />,
  comment: <CommentForm />,
};

const getForm = (type: string): ReactElement => mapping[type];

const Form: FC<{type: string}> = ({ type }) => (
    <>
      {getForm(type)}
    </>
);

export default Form;
