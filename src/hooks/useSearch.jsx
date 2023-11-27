import { useQuery } from "react-query";
import anime from "../api/axios";

const useSearch = title => {
  return useQuery(["title", title], async () => {
    const { data } = await anime.get(`/${title}`);
    return data;
  });
};

export default useSearch;
