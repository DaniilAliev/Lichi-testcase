import Card from "./Card";
import { useSelector } from "react-redux";
import { selectors } from "@/slices/postsSlice";
import AddPostForm from "./AddPostForm";

const MainContainer = () => {
  const articles = useSelector(selectors.selectAll)
  return (
    <main className="px-8 md:px-20 flex flex-col justify-center items-center">
      <AddPostForm />
      {articles.map((item) => <Card key={item.title} item={item}/>)}
    </main>
  )
}

export default MainContainer;
