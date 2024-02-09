import { ButtonType } from "@/types/types";
import { FC } from "react";

const Button: FC<ButtonType> = ({ type }) => {
	return (
		<button type='submit' className="mt-4 py-2 px-4 bg-stone-400 rounded-2xl text-white hover:bg-stone-500 transition duration-300">{type === 'post' ? 'Add post' : 'Comment'}</button>
	)
}

export default Button;
