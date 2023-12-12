import { useQuery } from "@tanstack/react-query";
import anime from "../api/axios";

//genres, year, season

export const useGenresAdvanceSearch = (type, value, pageNumber) => {
  return useQuery({
    queryKey: ["advance-search", { type, value, pageNumber }],
    queryFn: async () => {
      const { data } = await anime.get(
        `/advanced-search?${type}=${value}&page=${pageNumber}
`
      );
      return data;
    },
  });
};
