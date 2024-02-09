import { Item, RestoredItem } from "@/types/types";

const restoreData = (item: Item): RestoredItem => {
  const { id, title, body } = item;
  return { id, title, body };
};

export default restoreData;
