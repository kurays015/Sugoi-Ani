import anime from "../api/axios";
import { useQuery } from "react-query";

const useFetchAnimeCategories = (endpoint, pageNumber, itemsPerPage) => {
  return useQuery(
    ["animes", { pageNumber, itemsPerPage }],
    async () => {
      const { data } = await anime.get(
        `/${endpoint}?page=${pageNumber}&perPage=${itemsPerPage}`
      );
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
};

export default useFetchAnimeCategories;
