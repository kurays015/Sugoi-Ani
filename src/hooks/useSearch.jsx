import { useQuery } from "react-query";
import anime from "../api/axios";

const useSearch = (title, pageNumber) => {
  return useQuery(["title", title], async () => {
    const { data } = await anime.get(`/${title}?page=${pageNumber}`);
    return data;
  });
};

export default useSearch;
