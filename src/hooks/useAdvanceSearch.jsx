import { useQuery } from "@tanstack/react-query";
import anime from "../api/axios";

export default function useAdvanceSearch(searchParams, pageNumber) {
  return useQuery({
    queryKey: ["advance-search", searchParams.toString(), { pageNumber }],
    queryFn: async () => {
      const { data } = await anime.get(
        `/advanced-search?${searchParams.toString()}&page=${pageNumber}
`
      );
      return data;
    },
  });
}
