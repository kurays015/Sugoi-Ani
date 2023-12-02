import { useQuery } from "@tanstack/react-query";
import anime from "../api/axios";

const useWatchEpisode = id => {
  return useQuery({
    queryKey: ["episodeId", id],
    queryFn: async () => {
      const { data } = await anime.get(`/watch/${id}`);
      return data;
    },
    keepPreviousData: true,
  });
};

export default useWatchEpisode;
