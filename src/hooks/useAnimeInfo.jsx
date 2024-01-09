import { useQuery } from "@tanstack/react-query";
import anime from "../api/axios";
export default function useAnimeInfo(id) {
  return useQuery({
    queryKey: ["id", { id }],
    queryFn: async () => {
      const { data } = await anime.get(`/info/${id}`);
      return data;
    },
  });
}
