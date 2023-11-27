import { useQuery } from "react-query";
import anime from "../api/axios";

const useWatchEpisode = id => {
  return useQuery(["id", id], async () => {
    const { data } = await anime.get(`/watch/${id}`);
    return data;
  });
};

export default useWatchEpisode;
