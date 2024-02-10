import { useSelector } from 'react-redux';
import { selectors as commentsSelectors } from '@/slices/commentsSlice';
import { FC } from 'react';
import { EntityId } from '@reduxjs/toolkit';

type CommnetType = {
  id: EntityId,
  postId: number,
  body: string,
}

const CommentsContainer: FC<{ id: number }> = ({ id }) => {
 
  const comments = useSelector(commentsSelectors.selectAll);
  const filteredComments = comments.filter((comment) => comment.postId === id) as CommnetType[];
  console.log(comments);

  return (
    <div className="py-4 border-t-2">
      <ul className="text-xl">Comments:</ul>
      {filteredComments.length !== 0
        ? filteredComments.map((item) => <li key={item.body} className='list-none'><span className='font-semibold'>Your comment: </span>{item.body}</li>)
        : <li className='list-none'>No comments yet.</li>
      }
    </div>
  );
};

export default CommentsContainer;
