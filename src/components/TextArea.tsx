import { FC } from "react";
import { TextAreaType } from "@/types/types";

const TextArea: FC<TextAreaType> = ({ type, field }) => (
  <textarea
    type='post'
    {...field}
    className="border-2 rounded-2xl size-full p-2"
    name={field.name}
    id=""
    rows={2}
    placeholder={type === 'post' ? 'Write a new post...' : 'Leave a new comment'}
  />
);

export default TextArea;
