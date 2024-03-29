import { useDispatch, useSelector } from 'react-redux';
import { selectors as commentsSelectors } from '@/slices/commentsSlice.ts';
import { FC } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { actions as editActions } from '@/slices/editSlice.ts';

type CommentType = {
  id: EntityId,
  postId?: number,
  body?: string,
}

type CommentsContainerType = {
  id: EntityId | null,
  type: string,
}

const CommentsContainer: FC<CommentsContainerType> = ({ id, type }) => {
  const comments: CommentType[] = useSelector(commentsSelectors.selectAll);
  const filteredComments = comments.filter((comment) => comment.postId === id);

  const dispatch = useDispatch();

  const handleEdit = (commentId: EntityId, body: string | undefined) => {
    const dataToDispatch = {
      id: commentId, body, isEdit: false,
    };

    dispatch(editActions.startEdit(dataToDispatch));
  };

  return (
    <div className="py-4 border-t-2">
      <ul className="text-xl">Comments:</ul>
      {filteredComments.length !== 0
        ? filteredComments.map((item: CommentType) => <li key={`${item.body}${item.id}`} className='list-none'>
          <span className='font-semibold'>Your comment: </span>
          {item.body}
          {type === 'modal'
            && <button
              onClick={() => handleEdit(item.id, item.body)}
              className='pl-2 text-stone-400 hover:text-stone-500 '
              type='button'>
              Edit
            </button>}
        </li>)
        : <li className='list-none'>No comments yet.</li>
      }
    </div>
  );
};

export default CommentsContainer;
