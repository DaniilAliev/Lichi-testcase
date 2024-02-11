import React, { useCallback } from 'react';
import { selectors } from '@/slices/postsSlice.ts';
import useAppSelector from '@/hooks/index.ts';
import { RestoredItem } from '@/types/types.ts';
import { useDispatch } from 'react-redux';
import { actions as modalActions } from '@/slices/modalSlice.ts';
import Card from './Card.tsx';
import Form from './Form.tsx';

const MainContainer = () => {
  const articles: any = useAppSelector(selectors.selectAll);
  const dispatch = useDispatch();

  const handleClick = useCallback((title: string, body: string, id: string) => {
    const dataToState = {
      title, body, postId: id,
    };

    setTimeout(() => {
      dispatch(modalActions.openModal(dataToState));
    }, 100);
  }, [dispatch]);

  return (
    <main className="px-8 md:px-20 flex flex-col justify-center items-center">
      <Form type={'post'} />
      {articles.map((item: RestoredItem) => (
        <Card
          key={`${item.title}${item.id}`}
          item={item}
          handleClick={handleClick}
        />
      ))}
    </main>
  );
};

export default MainContainer;
