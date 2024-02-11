import { actions as modalActions } from '@/slices/modalSlice.ts';
import { ButtonType } from '@/types/types.ts';
import classNames from 'classnames';
import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors as editSelectors } from '@/slices/editSlice.ts';

const getButton = (type: 'post' | 'submit' | 'close'): string => {
  const mapping = {
    post: 'Post',
    submit: 'Submit',
    close: 'Close',
  };

  return mapping[type];
};

const Button: FC<ButtonType> = ({ type }) => {
  const { isEdit } = useSelector(editSelectors);

  const btnClass = classNames('mt-4', 'py-2', 'px-4', 'rounded-2xl', 'text-white', 'transition duration-300', {
    'bg-stone-400': type !== 'close',
    'hover:bg-stone-500': type !== 'close',
    'bg-gray-400': type === 'close',
    'hover:bg-gray-500': type === 'close',
    'bg-gray-100': type === 'close' && isEdit === true,
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
      disabled={type === 'close' && isEdit === true}
    >
      {getButton(type)}
    </button>
  );
};

export default memo(Button);
