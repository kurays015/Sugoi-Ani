import { useQuery, useQueryClient } from "@tanstack/react-query";
import anime from "../api/axios";
const useAnimeInfo = id => {
  return useQuery({
    queryKey: ["id", id],
    queryFn: async () => {
      const { data } = await anime.get(`/info/${id}`);
      return data;
    },
  });
};

export default useAnimeInfo;
