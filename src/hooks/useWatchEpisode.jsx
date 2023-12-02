import { keepPreviousData, useQuery } from "@tanstack/react-query";
import anime from "../api/axios";

const useWatchEpisode = id => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["episodeId", id],
    queryFn: async () => {
      const { data } = await anime.get(`/watch/${id}`);
      return data;
    },
    keepPreviousData: true,
  });
  return { data, isLoading, isError, error };
};

export default useWatchEpisode;
