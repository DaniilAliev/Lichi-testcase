const CommentForm = () => {
	return (
		<div className="pt-4 border-t-2">
			<form action="">
				<textarea className="border-2 rounded-2xl size-full p-2" name="" id="" rows="2" placeholder="Leave a comment..." />
				<button className="mt-4 py-2 px-4 bg-stone-400 rounded-2xl text-white hover:bg-stone-500" type="submit">Submit</button>
			</form>
		</div>
	)
}

export default CommentForm;
