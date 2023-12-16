import { useQuery } from "@tanstack/react-query";
import anime from "../api/axios";

//genres, year, season

export const useAdvanceSearch = ({ type, query, pageNumber }) => {
  return useQuery({
    queryKey: ["advance-search", { type, query, pageNumber }],
    queryFn: async () => {
      const { data } = await anime.get(
        `/advanced-search?${type}=${
          type === "genres" ? `["${query}"]` : query
        }&page=${pageNumber}
`
      );
      return data;
    },
  });
};
