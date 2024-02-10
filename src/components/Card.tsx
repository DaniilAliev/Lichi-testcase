import { FC } from 'react';
import { RestoredItem } from '@/types/types.ts';
import { useDispatch } from 'react-redux';
import { actions as modalActions } from '@/slices/modalSlice.ts';
import CommentsContainer from './CommentsContainer.tsx';

const Card: FC<{ item: RestoredItem }> = ({ item }) => {
  const dispatch = useDispatch();

  const { title, body, id } = item;

  const handleClick = () => {
    const dataToState = {
      title, body, postId: id,
    };

    dispatch(modalActions.openModal(dataToState));
  };

  return (
    <div
      className="max-w-screen-lg h-10 size-full h-full border-2 border-stone-200 rounded-2xl my-3 px-5 pt-5 transition-colors duration-200 hover:bg-stone-400 hover:text-white cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="text-3xl mb-4">{item.title}</h2>
      <p className="line-clamp-2 mb-4">
        {item.body}
      </p>
      <CommentsContainer id={id} type="card" />
    </div>);
};

export default Card;
