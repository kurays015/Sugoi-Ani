import anime from "../api/axios";
import { useQuery } from "@tanstack/react-query";

const useFetchAnimeCategories = (endpoint, pageNumber, itemsPerPage) => {
  return useQuery({
    queryKey: ["anime", { pageNumber, itemsPerPage }],
    queryFn: async () => {
      const { data } = await anime.get(
        `/${endpoint}?page=${pageNumber}&perPage=${itemsPerPage}`
      );
      return data;
    },
    keepPreviousData: true,
  });
};

export default useFetchAnimeCategories;
