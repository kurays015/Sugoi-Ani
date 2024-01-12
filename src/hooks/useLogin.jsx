import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useGetAnimeDataInLocalStorage } from "./useLocalStorage";
import { removeEmailDomain } from "../utils/removeEmailDomain";
import { setCookies } from "./useCookies";

export default function useLogin() {
  const navigate = useNavigate();
  const toast = useToast();
  const anime = useGetAnimeDataInLocalStorage();
  return useMutation({
    mutationFn: async credentials =>
      await axios.post(`${import.meta.env.VITE_BACKEND_LOGIN}`, credentials),
    onSuccess: ({ data: credentials }) => {
      navigate(`/watch/${anime.episodes[0]?.id}`);
      setCookies("user", credentials?.email);
      toast({
        title: `Welcome back! ${removeEmailDomain(credentials?.email)}`,
        status: "success",
        isClosable: true,
        duration: 2000,
      });
    },
    onError: ({ response }) => {
      toast({
        title: `Oops! ${response.data.error}`,
        status: "error",
        isClosable: true,
        duration: 4000,
      });
    },
  });
}
