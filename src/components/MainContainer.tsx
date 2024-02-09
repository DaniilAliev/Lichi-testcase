import Card from "./Card";
import { useSelector } from "react-redux";
import { selectors } from "@/slices/postsSlice";

const MainContainer = () => {
  const articles = useSelector(selectors.selectAll)
  console.log(articles)
  return (
    <main className="px-8 md:px-20 flex flex-col justify-center items-center">
      {articles.map((item) =>  <Card key={item.id} item={item}/>)}
    </main>
  )
}

export default MainContainer;
