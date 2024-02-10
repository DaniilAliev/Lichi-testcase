import { FC } from "react";
import CommentForm from "./CommentForm";
import { Item, RestoredItem } from "@/types/types";
import { useDispatch } from "react-redux";
import { actions as modalActions } from "@/slices/modalSlice";

const Card: FC<{ item: RestoredItem }> = ({ item }) => {
  const dispatch = useDispatch();

  const { title, body, id } = item;

  const handleClick = () => {
    const dataToState = {
      title, body, id,
    };

    dispatch(modalActions.openModal(dataToState));
  };

  return (
    <div
      className="max-w-screen-lg h-10 size-full h-full border-2 border-stone-200 rounded-2xl my-3 p-5 transition-colors duration-200 hover:bg-stone-400 hover:text-white cursor-pointer"
      onClick={handleClick}
      >
      <h2 className="text-3xl mb-4">{item.title}</h2>
      <p className="line-clamp-2 mb-4">
        {item.body}
      </p>
    </div>);
};

export default Card;
