import { FC } from "react";
import CommentForm from "./CommentForm";
import { Item } from "@/types/types";

const Card: FC<Item> = ({ item }) => {
  return (
    <div className="max-w-screen-lg h-10 size-full h-full border-2 border-stone-200 rounded-2xl my-3 p-5">
      <h2 className="text-3xl mb-4">{item.title}</h2>
      <p className="text-gray-400 line-clamp-2 mb-4">{item.body}</p>
      <CommentForm />
    </div>
  )
}

export default Card;
