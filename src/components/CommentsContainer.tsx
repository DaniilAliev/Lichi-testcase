import { useDispatch, useSelector } from 'react-redux';
import { selectors as commentsSelectors } from '@/slices/commentsSlice';
import { FC } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { actions as editActions } from '@/slices/editSlice';

type CommnetType = {
  id: EntityId,
  postId: number,
  body: string,
}

type CommentsContainerType = {
  id: number | null,
  type: string,
}

const CommentsContainer: FC<CommentsContainerType> = ({ id, type }) => {
  const comments = useSelector(commentsSelectors.selectAll);
  const filteredComments = comments.filter((comment) => comment.postId === id) as CommnetType[];

  const dispatch = useDispatch();

  const handleEdit = (commentId, body) => {
    const dataToDispatch = {
      id: commentId, body,
    };

    dispatch(editActions.startEdit(dataToDispatch));
  };

  return (
    <div className="py-4 border-t-2">
      <ul className="text-xl">Comments:</ul>
      {filteredComments.length !== 0
        ? filteredComments.map((item) => <li key={item.body} className='list-none'>
          <span className='font-semibold'>Your comment: </span>
          {item.body}
          {type === 'modal' && <button onClick={() => handleEdit(item.id, item.body)} className='pl-2 text-stone-400 hover:text-stone-500 ' type='button'>Edit</button>}
        </li>)
        : <li className='list-none'>No comments yet.</li>
      }
    </div>
  );
};

export default CommentsContainer;
