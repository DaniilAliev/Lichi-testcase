import { selectors } from '@/slices/postsSlice.ts';
import useAppSelector from '@/hooks/index.ts';
import { RestoredItem } from '@/types/types.ts';
import Card from './Card.tsx';
import Form from './Form.tsx';

const MainContainer = () => {
  const articles: any = useAppSelector(selectors.selectAll);
  return (
    <main className="px-8 md:px-20 flex flex-col justify-center items-center">
      <Form type={'post'}/>
      {articles.map((item: RestoredItem) => <Card key={`${item.title}${item.id}`} item={item} />)}
    </main>
  );
};

export default MainContainer;
