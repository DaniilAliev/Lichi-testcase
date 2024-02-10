import Button from "./Button";

const CommentForm = () => {
  return (
    <div className="pt-4 border-t-2">
      <form action="">
        <textarea className="border-2 rounded-2xl size-full p-2" name="" id="" rows="2" placeholder="Leave a comment..." />
        <div className="flex justify-between">
          <Button type={'submit'} />
          <Button type={'close'} />
        </div>

      </form>
    </div>
  )
}

export default CommentForm;
