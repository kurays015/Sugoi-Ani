import { useQuery } from "@tanstack/react-query";
import anime from "../api/axios";

//fix genre to be like this `["${genre}"]`

export const useAdvanceSearch = searchParams => {
  return useQuery({
    queryKey: ["advance-search", searchParams.toString()],
    queryFn: async () => {
      const { data } = await anime.get(
        `/advanced-search?${searchParams.toString()}
`
      );
      return data;
    },
  });
};
