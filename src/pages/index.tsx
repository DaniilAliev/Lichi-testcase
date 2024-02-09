import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';
import axios from 'axios';
import API_ROUTES from '@/routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as articlesActions } from '@/slices/postsSlice';
import { Item, RestoredItem } from '@/types/types';
import restoreData from '@/utils/restoreData';
import Modal from '@/components/Modal';
import CommentForm from '@/components/CommentForm';

export default function Home({ restorted }: { restorted: Array<Item> }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articlesActions.addArticles(restorted.slice(0, 10)))
  }, [])

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
    const restorted = data.map((item: Item): RestoredItem => restoreData(item))
    return { props: { restorted } }
  } catch (error) {
    console.error(error);
    return { props: { restorted: {} } }
  }
}