import { useQuery } from "@tanstack/react-query";
import anime from "../api/axios";

const useSearch = (title, pageNumber) => {
  return useQuery({
    queryKey: ["title", title],
    queryFn: async () => {
      const { data } = await anime.get(`/${title}?page=${pageNumber}`);
      return data;
    },
  });
};

export default useSearch;
