import { actions as modalActions } from '@/slices/modalSlice';
import { ButtonType } from '@/types/types';
import classNames from 'classnames';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

const getButton = (type: string): string => {
  const mapping = {
    post: 'Post',
    submit: 'Submit',
    close: 'Close',
  };

  return mapping[type];
};

const Button: FC<ButtonType> = ({ type }) => {
  const btnClass = classNames('mt-4', 'py-2', 'px-4', 'rounded-2xl', 'text-white', 'transition duration-300', {
    'bg-stone-400': type !== 'close',
    'hover:bg-stone-500': type !== 'close',
    'bg-gray-400': type === 'close',
    'hover:bg-gray-500': type === 'close',
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    if (type === 'close') {
      dispatch(modalActions.closeModal());
    }
  };

  return (
    <button
      type={type !== 'close' ? 'submit' : 'button'}
      className={btnClass}
      onClick={handleClick}
    >
      {getButton(type)}
    </button>
  );
};

export default Button;
