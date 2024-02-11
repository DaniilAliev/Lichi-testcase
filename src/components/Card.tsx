import { FC } from 'react';
import { RestoredItem } from '@/types/types.ts';
import { motion } from 'framer-motion';
import CommentsContainer from './CommentsContainer.tsx';

const Card: FC<{ item: RestoredItem, handleClick: any }> = ({ item, handleClick }) => {
  const { title, body, id } = item;

  return (
    <motion.div
      className="box max-w-screen-lg size-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div
        className="h-full border-2 border-stone-200 rounded-2xl my-3 px-5 pt-5 transition-colors duration-200 hover:bg-stone-400 hover:text-white cursor-pointer"
        onClick={() => handleClick(title, body, id)}
      >
        <h2 className="text-3xl mb-4">{item.title}</h2>
        <p className="line-clamp-2 mb-4">
          {item.body}
        </p>
        <CommentsContainer id={id} type="card" />
      </div>
    </motion.div>
  );
};

export default Card;
