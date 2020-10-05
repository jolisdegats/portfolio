import data from "../json/item.json";
import { client } from "../App";

export const getExternalItem = async (url) => {
  let item;
  let urlSplitted = url.split("/");
  let idToSearch = data[urlSplitted[urlSplitted.length - 1]].contentfulId;

  await client
    .getEntry(idToSearch)
    .then((entry) => (item = entry.fields))
    .catch(console.error);

  return item;
};
