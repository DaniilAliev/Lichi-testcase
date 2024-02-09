import CommentForm from "./CommentForm";

const Card = () => {
  return (
    <div className="max-w-screen-lg h-10 size-full h-full border-2 border-stone-200 rounded-2xl my-3 p-5">
      <h2 className="text-3xl mb-4">Title</h2>
      <p className="text-gray-400 line-clamp-2 mb-4">The sun was setting over the horizon, casting a warm glow across the sky.
        The sound of waves crashing against the shore filled the air, creating a sense
        of peace and tranquility. As the day came to an end, I couldn't help but feel
        grateful for moments like these, when nature's beauty reminded me of the simple
        joys in life.</p>
        <CommentForm />
    </div>
  )
}

export default Card;
