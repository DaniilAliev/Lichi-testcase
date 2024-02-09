import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import axios from 'axios';
import API_ROUTES from '@/routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as articlesActions } from '@/slices/postsSlice';
import { Item } from '@/types/types';

export default function Home<T>({data} : {data: Array<Item>}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articlesActions.addArticles(data.slice(0, 10)))
  }, [])

  return (
    <Layout>
      <MainContainer/>
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const {data} = await axios.get(`${API_ROUTES.URL}${API_ROUTES.POSTS}`);
    return { props: { data } }
  } catch (error) {
    console.error(error);
    return { props: { data: {} } }
  }
}