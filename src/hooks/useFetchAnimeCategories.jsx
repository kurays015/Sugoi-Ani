import anime from "../api/axios";
import { useQuery } from "@tanstack/react-query";

const useFetchAnimeCategories = (endpoint, pageNumber) => {
  return useQuery({
    queryKey: ["anime", { pageNumber }],
    queryFn: async () => {
      const { data } = await anime.get(`/${endpoint}?page=${pageNumber}`);
      return data;
    },
  });
};

export default useFetchAnimeCategories;
