import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useGetAnimeDataInLocalStorage } from "./useLocalStorage";

export default function useLogin() {
  const navigate = useNavigate();
  const toast = useToast();
  const anime = useGetAnimeDataInLocalStorage();
  return useMutation({
    mutationFn: async credentials =>
      await axios.post(`${import.meta.env.VITE_BACKEND_LOGIN}`, credentials),
    onSuccess: ({ data: credentials }) => {
      navigate(`/watch/${anime.episodes[0]?.id}`);
      Cookies.set("user", JSON.stringify(credentials), { expires: 7 });
      toast({
        title: "Logged in",
        status: "success",
        isClosable: true,
        duration: 2000,
      });
    },
  });
}
