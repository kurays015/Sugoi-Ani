import { useQuery, useQueryClient } from "react-query";
import anime from "../api/axios";
const useAnimeInfo = id => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery(
    ["id", id],
    async () => {
      const { data } = await anime.get(`/info/${id}`);
      return data;
    },
    {
      onSuccess: ({ data }) => {
        //on every success, it's refetch it data to keep updated on the changes
        queryClient.invalidateQueries("id", data);
      },
    }
  );
  return { data, isLoading, isError, error };
};

export default useAnimeInfo;
