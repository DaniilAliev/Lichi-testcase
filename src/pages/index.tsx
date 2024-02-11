import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as articlesActions } from '@/slices/postsSlice.ts';
import { Item, RestoredItem } from '@/types/types.ts';
import restoreData from '@/utils/restoreData.ts';
import Modal from '@/components/Modal.tsx';
import Layout from '@/components/Layout.tsx';
import MainContainer from '@/components/MainContainer.tsx';
import API_ROUTES from '@/routes/index.ts';

export default function Home({ restorted }: { restorted: Array<Item> }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articlesActions.addArticles(restorted.slice(0, 10)));
  }, [dispatch, restorted]);

  return (
    <Layout>
      <MainContainer />
      <Modal />
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(`${API_ROUTES.URL}${API_ROUTES.POSTS}`);
    const restorted = data.map((item: Item): RestoredItem => restoreData(item));
    return { props: { restorted } };
  } catch (error) {
    console.error(error);
    return { props: { restorted: {} } };
  }
};
