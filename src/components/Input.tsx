import { FC } from 'react';

const Input: FC<{ field: any }> = ({ field }) => (
  <input
    {...field}
    type="text"
    placeholder="Type a header"
    className="size-full p-2 text-3xl mb-4 outline-none"
  />
);

export default Input;
